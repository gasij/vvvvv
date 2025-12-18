import React, { Suspense, useMemo, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Компонент для обработки ошибок загрузки модели
function ModelErrorFallback() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#333" wireframe />
    </mesh>
  );
}

// Компонент для загрузки и отображения модели
function Model({ url }: { url: string }) {
  let gltf;
  let scene;
  
  try {
    gltf = useGLTF(url);
    scene = gltf?.scene;
  } catch (error) {
    console.error('Error loading GLB model:', error);
    return <ModelErrorFallback />;
  }
  
  if (!scene) {
    return <ModelErrorFallback />;
  }
  
  // Клонируем сцену для избежания проблем с переиспользованием
  const clonedScene = useMemo(() => {
    if (!scene) return null;
    try {
      return scene.clone();
    } catch (e) {
      console.error('Error cloning scene:', e);
      return scene;
    }
  }, [scene]);
  
  useEffect(() => {
    if (!clonedScene) return;
    
    try {
      // Настройка материалов для лучшего качества
      clonedScene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((mat: any) => {
                if (mat) {
                  mat.needsUpdate = true;
                }
              });
            } else {
              (child.material as any).needsUpdate = true;
            }
          }
        }
      });
    } catch (error) {
      console.error('Error setting up scene:', error);
    }
  }, [clonedScene]);

  if (!clonedScene) {
    return <ModelErrorFallback />;
  }

  try {
    return <primitive object={clonedScene} scale={0.3} />;
  } catch (error) {
    console.error('Error rendering model:', error);
    return <ModelErrorFallback />;
  }
}

// Компонент загрузки
function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
    </div>
  );
}

interface Model3DProps {
  modelPath: string;
  className?: string;
  autoRotate?: boolean;
  enableZoom?: boolean;
}

const Model3D: React.FC<Model3DProps> = ({ 
  modelPath, 
  className = "",
  autoRotate = true,
  enableZoom = true 
}) => {
  const [isClient, setIsClient] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loader />;
  }

  if (loadError) {
    return (
      <div className={`relative ${className} flex items-center justify-center`}>
        <div className="text-white/40 text-sm">3D модель недоступна</div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: true
        }}
        dpr={[1, 2]} // Поддержка высокого DPI для 4K
      >
        <Suspense 
          fallback={<Loader />}
        >
          {/* Освещение */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          
          {/* Окружение для реалистичного освещения */}
          <Environment preset="city" />
          
          {/* Модель с обработкой ошибок */}
          <ModelWrapper url={modelPath} onError={() => setLoadError(true)} />
          
          {/* Управление камерой */}
          <OrbitControls
            enableZoom={enableZoom}
            enablePan={false}
            autoRotate={autoRotate}
            autoRotateSpeed={0.5}
            minDistance={5}
            maxDistance={15}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

// Wrapper для обработки ошибок загрузки
function ModelWrapper({ url, onError }: { url: string; onError: () => void }) {
  useEffect(() => {
    // Проверяем доступность файла перед загрузкой
    fetch(url, { method: 'HEAD' })
      .catch(() => {
        console.error('Model file not found:', url);
        onError();
      });
  }, [url, onError]);

  return <Model url={url} />;
}

export default Model3D;
