'use client';

import { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { XRPLTransaction } from '@/lib/globe/xrpl-stream';
import { getLocationForAddress } from '@/lib/globe/known-accounts';
import { latLngToVector3, createArcPoints, getArcColor } from '@/lib/globe/geo-utils';

interface Props {
  transaction: XRPLTransaction;
  onComplete: (id: string) => void;
}

export default function TransactionArc({ transaction, onComplete }: Props) {
  const groupRef = useRef<THREE.Group>(null);
  const progressRef = useRef(0);
  const startTime = useRef(Date.now());
  const [completed, setCompleted] = useState(false);
  const duration = transaction.amount > 1_000_000 ? 6000 : transaction.amount > 10_000 ? 4000 : 3000;

  const { points, color, startPoint, endPoint } = useMemo(() => {
    const srcLoc = getLocationForAddress(transaction.account);
    const dstLoc = getLocationForAddress(transaction.destination);
    const start = latLngToVector3(srcLoc.lat, srcLoc.lng);
    const end = latLngToVector3(dstLoc.lat, dstLoc.lng);
    const arcPoints = createArcPoints(start, end);
    return {
      points: arcPoints,
      color: getArcColor(transaction.amount),
      startPoint: start,
      endPoint: end,
    };
  }, [transaction]);

  const endpointSize = transaction.amount > 1_000_000 ? 0.022 : transaction.amount > 10_000 ? 0.017 : 0.013;
  const tubeRadius = transaction.amount > 1_000_000 ? 0.004 : transaction.amount > 10_000 ? 0.003 : 0.002;

  // Create tube geometry for thick arcs
  const { tubeGeom, glowTubeGeom } = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(points);
    const tube = new THREE.TubeGeometry(curve, 32, tubeRadius, 6, false);
    const glowTube = new THREE.TubeGeometry(curve, 32, tubeRadius * 2.5, 6, false);
    return { tubeGeom: tube, glowTubeGeom: glowTube };
  }, [points, tubeRadius]);

  const matRef = useRef<THREE.MeshBasicMaterial>(null);
  const glowMatRef = useRef<THREE.MeshBasicMaterial>(null);

  useFrame(() => {
    if (completed) return;
    const elapsed = Date.now() - startTime.current;
    const progress = Math.min(elapsed / duration, 1);
    progressRef.current = progress;

    // Fade out in last 25%
    const opacity = progress > 0.75 ? 1 - (progress - 0.75) / 0.25 : 1;
    if (matRef.current) matRef.current.opacity = opacity;
    if (glowMatRef.current) glowMatRef.current.opacity = opacity * 0.25;

    if (progress >= 1) {
      setCompleted(true);
      onComplete(transaction.id);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Glow tube (wider, translucent) */}
      <mesh geometry={glowTubeGeom}>
        <meshBasicMaterial ref={glowMatRef} color={color} transparent opacity={0.25} depthWrite={false} />
      </mesh>
      {/* Core tube */}
      <mesh geometry={tubeGeom}>
        <meshBasicMaterial ref={matRef} color={color} transparent opacity={1} />
      </mesh>
      {/* Start endpoint */}
      <mesh position={startPoint}>
        <sphereGeometry args={[endpointSize, 10, 10]} />
        <meshBasicMaterial color={color} transparent opacity={0.9} />
      </mesh>
      <mesh position={startPoint}>
        <sphereGeometry args={[endpointSize * 2.5, 10, 10]} />
        <meshBasicMaterial color={color} transparent opacity={0.2} />
      </mesh>
      {/* End endpoint */}
      <mesh position={endPoint}>
        <sphereGeometry args={[endpointSize, 10, 10]} />
        <meshBasicMaterial color={color} transparent opacity={0.9} />
      </mesh>
      <mesh position={endPoint}>
        <sphereGeometry args={[endpointSize * 2.5, 10, 10]} />
        <meshBasicMaterial color={color} transparent opacity={0.2} />
      </mesh>
    </group>
  );
}
