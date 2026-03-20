import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial, ContactShadows, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { useScroll } from '../layout/SmoothScroll';

function MovingObject() {
  const meshRef = useRef(null);
  const materialRef = useRef(null);
  const lenis = useScroll();
  
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Constant slow rotation
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.15;
    
    // Scroll-based transformation
    if (lenis) {
      const mh = lenis.limit || Math.max(1, document.body.scrollHeight - window.innerHeight);
      const scroll = lenis.scroll || 0;
      const velocity = lenis.velocity || 0;
      
      // progress goes from 0 to 1
      const progress = Math.max(0, Math.min(1, scroll / mh));
      
      // Complex movement pattern based on scroll progress
      
      // X position: oscillate between -2.5 and +2.5
      const targetX = Math.sin(progress * Math.PI * 3) * 2.5;
      
      // Y position: Move up and down gently, or just sway
      const targetY = Math.cos(progress * Math.PI * 2) * 1;
      
      // Scale: grow slightly at the bottom
      const scaleVal = 1 + Math.sin(progress * Math.PI) * 0.8;
      
      // Smoothly interpolate current values to targets
      if (!isNaN(targetX)) meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
      if (!isNaN(targetY)) meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
      
      if (!isNaN(scaleVal)) meshRef.current.scale.set(scaleVal, scaleVal, scaleVal);
      
      // Spin faster when scrolling fast
      if (!isNaN(velocity)) meshRef.current.rotation.z -= velocity * 0.005;

      // Animate material color/properties based on scroll
      if (materialRef.current && !isNaN(progress)) {
        const c1 = new THREE.Color("#3b82f6"); // blue
        const c2 = new THREE.Color("#10b981"); // emerald
        const c3 = new THREE.Color("#8b5cf6"); // purple
        
        let targetColor;
        if (progress < 0.5) {
          targetColor = c1.lerp(c2, progress * 2);
        } else {
          targetColor = c2.lerp(c3, (progress - 0.5) * 2);
        }
        materialRef.current.color.lerp(targetColor, 0.1);
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.5, 4]} />
        <MeshDistortMaterial 
          ref={materialRef}
          color="#3b82f6" 
          emissive="#0a1a2a"
          envMapIntensity={1} 
          clearcoat={1} 
          clearcoatRoughness={0.1} 
          metalness={0.7} 
          roughness={0.2} 
          distort={0.4} 
          speed={2} 
        />
      </mesh>
    </Float>
  );
}

function BackgroundParticles() {
  const ref = useRef(null);
  const lenis = useScroll();

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.02;
    ref.current.rotation.x += delta * 0.01;
    
    if (lenis) {
      ref.current.position.y = (lenis.scroll || 0) * 0.001;
    }
  });

  return (
    <group ref={ref}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#3b82f6" />
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={2} color="#10b981" />
        
        <MovingObject />
        <BackgroundParticles />
        
        <Environment preset="city" />
        <ContactShadows position={[0, -3.5, 0]} opacity={0.6} scale={20} blur={2.5} far={4} color="#000000" />
      </Suspense>
    </Canvas>
  );
}
