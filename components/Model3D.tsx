import React, { Suspense, useMemo, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Компонент для загрузки и отображения модели
function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  
  // Клонируем сцену для избежания проблем с переиспользованием
  const clonedScene = useMemo(() => {
    if (!scene) return null;
    return scene.clone();
  }, [scene]);
  
  useEffect(() => {
    if (!clonedScene) return;
    
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
  }, [clonedScene]);

  if (!clonedScene) return null;

  return <primitive object={clonedScene} scale={0.7} />;
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

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loader />;
  }

  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: true
        }}
        dpr={[1, 2]} // Поддержка высокого DPI для 4K
      >
        <Suspense fallback={null}>
          {/* Освещение */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          
          {/* Окружение для реалистичного освещения */}
          <Environment preset="city" />
          
          {/* Модель */}
          <Model url={modelPath} />
          
          {/* Управление камерой */}
          <OrbitControls
            enableZoom={enableZoom}
            enablePan={false}
            autoRotate={autoRotate}
            autoRotateSpeed={0.5}
            minDistance={3}
            maxDistance={10}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Model3D;

