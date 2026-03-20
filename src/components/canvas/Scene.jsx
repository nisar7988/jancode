import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useScroll } from '../layout/SmoothScroll';

function TechOrb({ isStarted }) {
  const groupRef = useRef(null);
  const coreRef = useRef(null);
  const wireframeRef = useRef(null);
  const glassRef = useRef(null);
  const startTransitionVal = useRef(0);
  const lenis = useScroll();

  useFrame((state, delta) => {
    // Smoothly interpolate the transition value to 1 after isStarted is true
    startTransitionVal.current = THREE.MathUtils.lerp(
      startTransitionVal.current, 
      isStarted ? 1 : 0, 
      0.02
    );

    // Ensure all refs are fully populated before animating
    if (!groupRef.current || !coreRef.current || !wireframeRef.current || !glassRef.current) return;

    const t = state.clock.getElapsedTime();

    // --- Base Idle Animations ---
    // 1. Core pulsing (emissive intensity breathes between 0.5 and 1.2)
    coreRef.current.material.emissiveIntensity = 0.8 + Math.sin(t * 2) * 0.4;
    
    // 2. Continuous rotations for parallax feeling
    coreRef.current.rotation.y += delta * 0.2;
    coreRef.current.rotation.x += delta * 0.1;
    
    wireframeRef.current.rotation.y -= delta * 0.4;
    wireframeRef.current.rotation.z += delta * 0.2;
    
    glassRef.current.rotation.y += delta * 0.1;

    // --- Scroll Interactions ---
    let progress = 0;
    let velocity = 0;

    // Safely extract Lenis state
    if (lenis) {
      const mh = lenis.limit || Math.max(1, document.body.scrollHeight - window.innerHeight);
      const scroll = lenis.scroll || 0;
      velocity = lenis.velocity || 0;
      progress = Math.max(0, Math.min(1, scroll / mh));
    }

    if (!isNaN(progress)) {
      // Base scale from scroll (1x to 1.5x)
      const scrollScale = 1 + progress * 0.5;
      // Entrance scale (starts at 1.5x and shrinks to 1x)
      const entranceScale = 1.5 - startTransitionVal.current * 0.5;
      
      const finalScale = scrollScale * entranceScale;
      groupRef.current.scale.lerp(new THREE.Vector3(finalScale, finalScale, finalScale), 0.05);

      // Position: Sine motion horizontally mapping scroll bounds
      const targetX = Math.sin(progress * Math.PI * 2) * 2;
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
      
      // Position: Subtle floating Y offset mapping scroll
      const targetY = Math.cos(progress * Math.PI) * 0.5 - 0.5;
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
      
      // Animation intensity boosts dynamically using progress
      coreRef.current.material.emissiveIntensity += progress * 1.0; 
    }


    // Scroll speed augments the group rotation
    if (!isNaN(velocity)) {
      groupRef.current.rotation.y += velocity * 0.002;
      groupRef.current.rotation.x += velocity * 0.001;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1.5} floatingRange={[-0.1, 0.1]}>
      <group ref={groupRef}>
        {/* Layer 1: Inner Glowing Core */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[0.7, 1]} />
          <meshStandardMaterial 
            color="#3b82f6" 
            emissive="#2563eb" 
            emissiveIntensity={1} 
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Layer 2: Outer Transparent Glass Sphere */}
        <mesh ref={glassRef}>
          <sphereGeometry args={[1.2, 32, 32]} />
          <meshPhysicalMaterial 
            color="#ffffff"
            transmission={1}          // Glass transparency
            opacity={1}
            metalness={0.1}
            roughness={0}             // Perfectly smooth
            ior={1.5}                 // Index of refraction for distortion
            thickness={2}             // Volume depth
            specularIntensity={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Layer 3: Outer Wireframe Tech Shell */}
        <mesh ref={wireframeRef}>
          <icosahedronGeometry args={[1.45, 2]} />
          <meshBasicMaterial 
            color="#60a5fa" 
            wireframe={true} 
            transparent={true} 
            opacity={0.15} 
          />
        </mesh>
      </group>
    </Float>
  );
}

function BackgroundStars({ isStarted }) {
  const ref = useRef(null);
  const startTransitionVal = useRef(0);
  const lenis = useScroll();

  useFrame((state, delta) => {
    if (!ref.current) return;
    
    startTransitionVal.current = THREE.MathUtils.lerp(
      startTransitionVal.current, 
      isStarted ? 1 : 0, 
      0.01
    );

    // Slow rotational depth
    ref.current.rotation.y += delta * 0.02;
    ref.current.rotation.x += delta * 0.01;
    
    // Parallax tie-in
    if (lenis && !isNaN(lenis.scroll)) {
      ref.current.position.y = lenis.scroll * 0.0005;
    }
  });

  return (
    <group ref={ref}>
      <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={1} />
    </group>
  );
}

export default function Scene({ isStarted }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
    >
      <Suspense fallback={null}>
        {/* Premium multi-angle lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 5]} intensity={1.2} color="#ffffff" />
        <spotLight position={[-5, 5, 5]} angle={0.2} penumbra={1} intensity={2} color="#3b82f6" />
        <spotLight position={[5, -5, 5]} angle={0.2} penumbra={1} intensity={1.5} color="#8b5cf6" />
        
        <TechOrb isStarted={isStarted} />
        <BackgroundStars isStarted={isStarted} />
        
        {/* Environment for stunning reflections on the glass material */}
        <Environment preset="city" />
        
        {/* Grounding shadow below the orb */}
        <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={15} blur={2.5} far={4} color="#000000" />
      </Suspense>
    </Canvas>
  );
}
