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
  const lineRef = useRef<THREE.Line>(null);
  const glowLineRef = useRef<THREE.Line>(null);
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

  // Create line objects
  const { line, glowLine } = useMemo(() => {
    const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 1 });
    const geom = new THREE.BufferGeometry().setFromPoints(points.slice(0, 2));
    const l = new THREE.Line(geom, mat);

    const glowMat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.4 });
    const glowGeom = new THREE.BufferGeometry().setFromPoints(points.slice(0, 2));
    const gl = new THREE.Line(glowGeom, glowMat);

    return { line: l, glowLine: gl };
  }, [color, points]);

  useFrame(() => {
    if (completed) return;
    const elapsed = Date.now() - startTime.current;
    const progress = Math.min(elapsed / duration, 1);
    progressRef.current = progress;

    let drawPoints: THREE.Vector3[];
    if (progress < 0.5) {
      const growProgress = progress / 0.5;
      const visibleCount = Math.max(Math.floor(growProgress * points.length), 2);
      drawPoints = points.slice(0, visibleCount);
    } else if (progress < 0.75) {
      drawPoints = points;
    } else {
      const fadeProgress = (progress - 0.75) / 0.25;
      const startIdx = Math.floor(fadeProgress * points.length);
      drawPoints = points.slice(startIdx);
      if (drawPoints.length < 2) drawPoints = points.slice(-2);
    }

    if (lineRef.current) {
      lineRef.current.geometry.dispose();
      lineRef.current.geometry = new THREE.BufferGeometry().setFromPoints(drawPoints);
      (lineRef.current.material as THREE.LineBasicMaterial).opacity = progress > 0.75 ? 1 - (progress - 0.75) / 0.25 : 1;
    }

    if (glowLineRef.current) {
      glowLineRef.current.geometry.dispose();
      glowLineRef.current.geometry = new THREE.BufferGeometry().setFromPoints(drawPoints);
      (glowLineRef.current.material as THREE.LineBasicMaterial).opacity = (progress > 0.75 ? 1 - (progress - 0.75) / 0.25 : 1) * 0.4;
    }

    if (progress >= 1) {
      setCompleted(true);
      onComplete(transaction.id);
    }
  });

  return (
    <group>
      <primitive ref={glowLineRef} object={glowLine} />
      <primitive ref={lineRef} object={line} />
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
