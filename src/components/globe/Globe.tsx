'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { XRPLTransaction } from '@/lib/globe/xrpl-stream';
import TransactionArc from './TransactionArc';
import { continentOutlines, ContinentPolyline } from '@/data/continent-outlines';

function latLngToVec3(lat: number, lng: number, R: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -R * Math.sin(phi) * Math.cos(theta),
    R * Math.cos(phi),
    R * Math.sin(phi) * Math.sin(theta)
  );
}

function ContinentOutlines() {
  const lines = useMemo(() => {
    const R = 1.002;
    const allPolylines: ContinentPolyline[] = [];
    for (const polylines of Object.values(continentOutlines)) {
      allPolylines.push(...polylines);
    }
    return allPolylines.map((polyline) => {
      const points = polyline.map(([lat, lng]) => latLngToVec3(lat, lng, R));
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color('#0085FF'),
        transparent: true,
        opacity: 0.75,
        depthWrite: false,
      });
      return { geometry, material };
    });
  }, []);

  return (
    <>
      {lines.map((line, i) => (
        <primitive key={i} object={new THREE.Line(line.geometry, line.material)} />
      ))}
    </>
  );
}

function FresnelMaterial() {
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color('#0085FF') },
        intensity: { value: 1.2 },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float intensity;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vec3 viewDir = normalize(-vPosition);
          float fresnel = 1.0 - dot(viewDir, vNormal);
          fresnel = pow(fresnel, 3.0) * intensity;
          gl_FragColor = vec4(color, fresnel * 0.6);
        }
      `,
      transparent: true,
      side: THREE.FrontSide,
      depthWrite: false,
    });
  }, []);
  return <primitive object={material} attach="material" />;
}

function EarthSphere({ children }: { children?: React.ReactNode }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Globe surface - light gray */}
      <mesh>
        <sphereGeometry args={[0.995, 64, 64]} />
        <meshPhongMaterial color="#c8cdd3" emissive="#2a2d32" shininess={15} transparent opacity={0.95} />
      </mesh>
      {/* Wireframe grid - subtle on light surface */}
      <mesh>
        <sphereGeometry args={[1, 36, 18]} />
        <meshBasicMaterial color="#9aa0a8" wireframe transparent opacity={0.12} />
      </mesh>
      {/* Continent outlines */}
      <ContinentOutlines />
      {/* Fresnel rim glow */}
      <mesh>
        <sphereGeometry args={[1.001, 64, 64]} />
        <FresnelMaterial />
      </mesh>
      {/* Atmosphere glow layers - stronger */}
      <mesh>
        <sphereGeometry args={[1.04, 64, 64]} />
        <meshBasicMaterial color="#0085FF" transparent opacity={0.12} side={THREE.BackSide} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.08, 64, 64]} />
        <meshBasicMaterial color="#0085FF" transparent opacity={0.08} side={THREE.BackSide} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.15, 64, 64]} />
        <meshBasicMaterial color="#0060CC" transparent opacity={0.05} side={THREE.BackSide} />
      </mesh>
      {children}
    </group>
  );
}

interface GlobeSceneProps {
  arcs: XRPLTransaction[];
  onArcComplete: (id: string) => void;
}

function GlobeScene({ arcs, onArcComplete }: GlobeSceneProps) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#0085FF" />
      <directionalLight position={[5, 3, 5]} intensity={0.5} color="#ffffff" />
      <Stars radius={50} depth={50} count={3000} factor={3} saturation={0} fade speed={0.5} />
      <EarthSphere>
        {arcs.map(tx => (
          <TransactionArc key={tx.id} transaction={tx} onComplete={onArcComplete} />
        ))}
      </EarthSphere>
      <OrbitControls
        enablePan={false}
        minDistance={1.5}
        maxDistance={4}
        enableDamping
        dampingFactor={0.05}
        rotateSpeed={0.5}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </>
  );
}

interface GlobeProps {
  arcs: XRPLTransaction[];
  onArcComplete: (id: string) => void;
}

export default function Globe({ arcs, onArcComplete }: GlobeProps) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <GlobeScene arcs={arcs} onArcComplete={onArcComplete} />
      </Canvas>
    </div>
  );
}
