'use client';

import { useRef, useMemo } from 'react';
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const meshRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const glowRef = useRef<any>(null);
  const progressRef = useRef(0);
  const startTime = useRef(Date.now());
  const duration = transaction.amount > 1_000_000 ? 12000 : transaction.amount > 10_000 ? 10000 : 8000;

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

  const endpointSize = transaction.amount > 1_000_000 ? 0.018 : transaction.amount > 10_000 ? 0.014 : 0.011;

  useFrame(() => {
    const elapsed = Date.now() - startTime.current;
    const progress = Math.min(elapsed / duration, 1);
    progressRef.current = progress;

    if (meshRef.current) {
      const geom = meshRef.current.geometry as THREE.BufferGeometry;

      if (progress < 0.5) {
        const growProgress = progress / 0.5;
        const visibleCount = Math.floor(growProgress * points.length);
        const drawPoints = points.slice(0, Math.max(visibleCount, 2));
        geom.setFromPoints(drawPoints);
      } else if (progress < 0.75) {
        geom.setFromPoints(points);
      } else {
        const fadeProgress = (progress - 0.75) / 0.25;
        const startIdx = Math.floor(fadeProgress * points.length);
        const drawPoints = points.slice(startIdx);
        if (drawPoints.length >= 2) {
          geom.setFromPoints(drawPoints);
        }
      }

      const mat = meshRef.current.material as THREE.LineBasicMaterial;
      mat.opacity = progress > 0.75 ? 1 - (progress - 0.75) / 0.25 : 1;

      if (glowRef.current) {
        const glowGeom = glowRef.current.geometry as THREE.BufferGeometry;
        const positions = geom.getAttribute('position');
        if (positions && positions.count >= 2) {
          glowGeom.setAttribute('position', positions);
          glowGeom.attributes.position.needsUpdate = true;
        }
        const glowMat = glowRef.current.material as THREE.LineBasicMaterial;
        glowMat.opacity = (progress > 0.75 ? 1 - (progress - 0.75) / 0.25 : 1) * 0.4;
      }
    }

    if (progress >= 1) {
      onComplete(transaction.id);
    }
  });

  return (
    <group>
      <line ref={glowRef}>
        <bufferGeometry />
        <lineBasicMaterial color={color} transparent opacity={0.4} linewidth={3} />
      </line>
      <line ref={meshRef}>
        <bufferGeometry />
        <lineBasicMaterial color={color} transparent opacity={1} linewidth={2} />
      </line>
      <mesh position={startPoint}>
        <sphereGeometry args={[endpointSize, 10, 10]} />
        <meshBasicMaterial color={color} transparent opacity={0.9} />
      </mesh>
      <mesh position={startPoint}>
        <sphereGeometry args={[endpointSize * 2, 10, 10]} />
        <meshBasicMaterial color={color} transparent opacity={0.25} />
      </mesh>
      <mesh position={endPoint}>
        <sphereGeometry args={[endpointSize, 10, 10]} />
        <meshBasicMaterial color={color} transparent opacity={0.9} />
      </mesh>
      <mesh position={endPoint}>
        <sphereGeometry args={[endpointSize * 2, 10, 10]} />
        <meshBasicMaterial color={color} transparent opacity={0.25} />
      </mesh>
    </group>
  );
}
