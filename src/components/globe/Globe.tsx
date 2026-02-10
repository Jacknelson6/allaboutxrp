'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { XRPLTransaction } from '@/lib/globe/xrpl-stream';
import TransactionArc from './TransactionArc';

function generateContinentPoints(): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const R = 1.001;

  const landCoords: [number, number][] = [
    [48, -122], [45, -93], [40, -74], [37, -122], [32, -97], [25, -80],
    [55, -120], [60, -135], [50, -100], [42, -88], [35, -106], [30, -90],
    [47, -70], [44, -110], [38, -85], [33, -112], [29, -95],
    [-3, -60], [-12, -77], [-23, -43], [-34, -58], [-15, -48], [4, -74],
    [-8, -35], [-20, -63], [-33, -71], [-1, -48], [-16, -69],
    [51, 0], [48, 2], [52, 13], [59, 18], [40, -4], [41, 12], [38, 24],
    [55, 37], [60, 25], [47, 8], [50, 20], [45, 15], [56, 10],
    [30, 31], [0, 32], [-26, 28], [5, -4], [34, 9], [-4, 37], [12, 15],
    [-2, 30], [-18, 25], [15, 33], [7, 4], [-12, 17],
    [35, 105], [40, 116], [31, 121], [35, 140], [37, 127], [22, 114],
    [1, 104], [13, 100], [28, 77], [39, 68], [55, 83], [25, 55],
    [48, 107], [43, 87], [30, 48], [15, 120], [33, 44],
    [-34, 151], [-27, 153], [-37, 175], [-42, 147], [-23, 134],
  ];

  for (const [lat, lng] of landCoords) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    points.push(new THREE.Vector3(
      -R * Math.sin(phi) * Math.cos(theta),
      R * Math.cos(phi),
      R * Math.sin(phi) * Math.sin(theta)
    ));
  }
  return points;
}

function EarthSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05;
    }
  });

  const continentPoints = useMemo(() => generateContinentPoints(), []);

  return (
    <group ref={meshRef}>
      <mesh>
        <sphereGeometry args={[0.995, 64, 64]} />
        <meshPhongMaterial color="#0a1628" emissive="#050d1a" shininess={5} transparent opacity={0.95} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1, 36, 18]} />
        <meshBasicMaterial color="#0e2a4a" wireframe transparent opacity={0.15} />
      </mesh>
      {continentPoints.map((point, i) => (
        <mesh key={i} position={point}>
          <sphereGeometry args={[0.012, 6, 6]} />
          <meshBasicMaterial color="#00A3FF" transparent opacity={0.6} />
        </mesh>
      ))}
      <mesh>
        <sphereGeometry args={[1.05, 64, 64]} />
        <meshBasicMaterial color="#00A3FF" transparent opacity={0.04} side={THREE.BackSide} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.1, 64, 64]} />
        <meshBasicMaterial color="#00A3FF" transparent opacity={0.02} side={THREE.BackSide} />
      </mesh>
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
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.2} color="#00A3FF" />
      <Stars radius={50} depth={50} count={3000} factor={3} saturation={0} fade speed={0.5} />
      <EarthSphere />
      {arcs.map(tx => (
        <TransactionArc key={tx.id} transaction={tx} onComplete={onArcComplete} />
      ))}
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
