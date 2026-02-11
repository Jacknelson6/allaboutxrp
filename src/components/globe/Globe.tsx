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
      {/* Globe surface - brighter so it's visible against black */}
      <mesh>
        <sphereGeometry args={[0.995, 64, 64]} />
        <meshPhongMaterial color="#0d2847" emissive="#0a1e3a" shininess={8} transparent opacity={0.97} />
      </mesh>
      {/* Wireframe grid - more visible */}
      <mesh>
        <sphereGeometry args={[1, 36, 18]} />
        <meshBasicMaterial color="#1a5a8a" wireframe transparent opacity={0.28} />
      </mesh>
      {/* Continent dots - unchanged */}
      {continentPoints.map((point, i) => (
        <mesh key={i} position={point}>
          <sphereGeometry args={[0.016, 8, 8]} />
          <meshBasicMaterial color="#00BFFF" transparent opacity={0.85} />
        </mesh>
      ))}
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
