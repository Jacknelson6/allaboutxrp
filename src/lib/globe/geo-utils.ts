import * as THREE from 'three';

const GLOBE_RADIUS = 1;

export function latLngToVector3(lat: number, lng: number, radius: number = GLOBE_RADIUS): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

export function createArcPoints(
  start: THREE.Vector3,
  end: THREE.Vector3,
  segments: number = 64,
  altitude: number = 0.3
): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
  const dist = start.distanceTo(end);
  mid.normalize().multiplyScalar(GLOBE_RADIUS + altitude * dist);

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const p = new THREE.Vector3();
    p.x = (1 - t) * (1 - t) * start.x + 2 * (1 - t) * t * mid.x + t * t * end.x;
    p.y = (1 - t) * (1 - t) * start.y + 2 * (1 - t) * t * mid.y + t * t * end.y;
    p.z = (1 - t) * (1 - t) * start.z + 2 * (1 - t) * t * mid.z + t * t * end.z;
    points.push(p);
  }
  return points;
}

export function getArcColor(amount: number): string {
  if (amount >= 250_000) return '#50FF6E'; // green for large txns
  return '#0085FF'; // blue for everything else
}
