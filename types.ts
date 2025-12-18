
// Import React to provide access to the React namespace and types like ReactNode
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  className?: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  items: string[];
}