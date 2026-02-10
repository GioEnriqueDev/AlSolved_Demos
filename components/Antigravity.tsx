'use client';

/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame, useThree, RootState } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

interface AntigravityProps {
    count?: number;
    springStrength?: number;
    friction?: number;
    forceFormation?: boolean;
}

interface ParticleData {
    home: THREE.Vector3;
    pos: THREE.Vector3;
    vel: THREE.Vector3;
    scale: number;
    colorIndex: number;
    phase: number;
    speed: number;
    glimmerPhase: number;
    staggerDelay: number;
}

// Generate a high-precision "A" shape
function generateAShape(count: number): THREE.Vector3[] {
    const points: THREE.Vector3[] = [];
    const thickness = 0.35;

    const leftLegCount = Math.floor(count * 0.38);
    const rightLegCount = Math.floor(count * 0.38);
    const crossbarCount = Math.floor(count * 0.16);
    const floaterCount = count - leftLegCount - rightLegCount - crossbarCount;

    // Left leg
    for (let i = 0; i < leftLegCount; i++) {
        const t = Math.random();
        const x = -3.5 + t * 3.5;
        const y = -6 + t * 12;
        const z = (Math.random() - 0.5) * thickness;
        points.push(new THREE.Vector3(x, y, z));
    }

    // Right leg
    for (let i = 0; i < rightLegCount; i++) {
        const t = Math.random();
        const x = 3.5 - t * 3.5;
        const y = -6 + t * 12;
        const z = (Math.random() - 0.5) * thickness;
        points.push(new THREE.Vector3(x, y, z));
    }

    // Crossbar
    for (let i = 0; i < crossbarCount; i++) {
        const t = Math.random();
        const x = -1.8 + t * 3.6;
        const y = -0.5;
        const z = (Math.random() - 0.5) * thickness;
        points.push(new THREE.Vector3(x, y, z));
    }

    // Atmospheric orbiters
    for (let i = 0; i < floaterCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 10 + Math.random() * 12;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = (Math.random() - 0.5) * 15;
        points.push(new THREE.Vector3(x, y, z));
    }

    return points;
}

const PALETTE = [
    [0.914, 0.239, 0.510], // #E93D82 AlSolved Magenta
    [1.000, 0.450, 0.650], // Lighter Glimmer
    [0.750, 0.100, 0.350], // Shadow Magenta
    [1.000, 1.000, 1.000], // Highlight White
    [0.900, 0.900, 0.950], // Atmospheric Blue-White
];

const FORMATION_COLOR = [0.914, 0.239, 0.510];

function createCircleTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    const radial = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    radial.addColorStop(0, 'rgba(255, 255, 255, 1)');
    radial.addColorStop(0.25, 'rgba(255, 255, 255, 0.8)');
    radial.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
    radial.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = radial;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(canvas);
}

const ParticleSystem = ({
    count = 3500,
    springStrength = 0.025,
    friction = 0.92,
    forceFormation = false
}: AntigravityProps) => {
    const pointsRef = useRef<THREE.Points>(null);
    const { viewport, mouse } = useThree();
    const circleTexture = useMemo(() => createCircleTexture(), []);

    const forceRef = useRef(forceFormation);
    forceRef.current = forceFormation;

    const aPositions = useMemo(() => generateAShape(count), [count]);

    const { geometry, particles } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const sizes = new Float32Array(count);
        const particleData: ParticleData[] = [];

        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * viewport.width * 2;
            const y = (Math.random() - 0.5) * viewport.height * 2;
            const z = (Math.random() - 0.5) * 50;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            const colorIndex = Math.floor(Math.random() * PALETTE.length);
            const color = PALETTE[colorIndex];
            colors[i * 3] = color[0];
            colors[i * 3 + 1] = color[1];
            colors[i * 3 + 2] = color[2];

            sizes[i] = 4 + Math.random() * 12;

            particleData.push({
                home: new THREE.Vector3(x, y, z),
                pos: new THREE.Vector3(x, y, z),
                vel: new THREE.Vector3(0, 0, 0),
                scale: 0.3 + Math.random() * 1.5,
                colorIndex,
                phase: Math.random() * Math.PI * 2,
                speed: 0.5 + Math.random() * 1.5,
                glimmerPhase: Math.random() * Math.PI * 2,
                staggerDelay: Math.random() * 0.8, // For building effect
            });
        }

        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        return { geometry: geo, particles: particleData };
    }, [count, viewport.width, viewport.height]);

    const globalMorphFactor = useRef(0);
    const targetMorph = useRef(0);

    useFrame((state: RootState) => {
        const points = pointsRef.current;
        if (!points) return;

        const time = state.clock.getElapsedTime();

        // Control high-level target morph
        if (!forceRef.current) {
            const cycle = time % 22;
            if (cycle < 7) targetMorph.current = 0;
            else if (cycle < 10) targetMorph.current = (cycle - 7) / 3;
            else if (cycle < 16) targetMorph.current = 1;
            else targetMorph.current = 1 - (cycle - 16) / 4;
        } else {
            targetMorph.current = 1;
        }

        // Global smoothing for the morph state
        const lerpSpeed = forceRef.current ? 0.08 : 0.03;
        globalMorphFactor.current += (targetMorph.current - globalMorphFactor.current) * lerpSpeed;
        const gW = globalMorphFactor.current;

        const positionAttr = geometry.getAttribute('position') as THREE.BufferAttribute;
        const colorAttr = geometry.getAttribute('color') as THREE.BufferAttribute;
        const sizeAttr = geometry.getAttribute('size') as THREE.BufferAttribute;

        const posArray = positionAttr.array as Float32Array;
        const colorArray = colorAttr.array as Float32Array;
        const sizeArray = sizeAttr.array as Float32Array;

        const mX = (mouse.x * viewport.width) / 2;
        const mY = (mouse.y * viewport.height) / 2;

        const aRot = time * 0.05;
        const cosR = Math.cos(aRot);
        const sinR = Math.sin(aRot);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            const aPos = aPositions[i];

            // --- THEATRICAL STAGGERED MORPH ---
            // Calculate a local weight modifier based on spatial distribution and delay
            // Sweep effect from bottom to top of the 'A'
            const yNormalized = (aPos.y + 6) / 12; // 0 to 1
            const staggerW = Math.max(0, Math.min(1, (gW * 1.5) - (yNormalized * 0.5) - p.staggerDelay * 0.2));

            // --- ATMOSPHERIC VORTEX & TURBULENCE ---
            // Background particles move in a cinematic "river" when idle
            const vortexStrength = (1 - staggerW) * 0.8;
            const flowX = Math.sin(time * 0.2 + p.home.y * 0.1) * 8 * vortexStrength;
            const flowY = Math.cos(time * 0.15 + p.home.x * 0.1) * 8 * vortexStrength;
            const swirl = (Math.sin(time * 0.3 * p.speed + p.phase) * 5) * (1.2 - staggerW);

            const cloudX = p.home.x + flowX + swirl;
            const cloudY = p.home.y + flowY + swirl;
            const cloudZ = p.home.z + Math.sin(time * 0.4 + p.phase) * 10 * (1 - staggerW);

            // --- CINEMATIC "A" CONSTRUCTION ---
            // Add a "construction wave" that ripples through the shape
            const wave = Math.sin(time * 5 - aPos.y * 0.8) * 0.5 * staggerW;

            const ax = aPos.x * 2.8;
            const ay = aPos.y * 2.8 + wave;
            const az = aPos.z * 2.8;

            // Rotation of the formed shape
            const rotX = ax * cosR - az * sinR;
            const rotZ = ax * sinR + az * cosR;

            const tX = cloudX * (1 - staggerW) + rotX * staggerW;
            const tY = cloudY * (1 - staggerW) + ay * staggerW;
            const tZ = cloudZ * (1 - staggerW) + rotZ * staggerW;

            // --- PHYSICS & SPRING ---
            // Stronger spring for "organized" professional feel
            const personalSpring = springStrength * (0.8 + staggerW * 0.4);
            p.vel.x += (tX - p.pos.x) * personalSpring;
            p.vel.y += (tY - p.pos.y) * personalSpring;
            p.vel.z += (tZ - p.pos.z) * personalSpring;

            // --- MOUSE REPULSION ---
            const dM = p.pos.distanceTo(new THREE.Vector3(mX, mY, 0));
            if (dM < 12) {
                const rep = (1 - dM / 12) * 0.6 * (1 - staggerW * 0.7);
                p.vel.x += (p.pos.x - mX) * rep;
                p.vel.y += (p.pos.y - mY) * rep;
            }

            p.vel.multiplyScalar(friction);
            p.pos.add(p.vel);

            posArray[i * 3] = p.pos.x;
            posArray[i * 3 + 1] = p.pos.y;
            posArray[i * 3 + 2] = p.pos.z;

            // --- CINEMATIC GLIMMER & COLORING ---
            const baseCol = PALETTE[p.colorIndex];
            const glimmer = 1.0 + Math.sin(time * 4 + p.glimmerPhase) * 0.5 * (1 - staggerW * 0.5);

            // Peak formation glow
            const formationPulse = Math.sin(time * 2) * 0.2 * staggerW;
            const targetCol = staggerW > 0.5 ? FORMATION_COLOR : baseCol;
            const mixSpeed = staggerW > 0.5 ? 0.15 : 0.05;

            colorArray[i * 3] += (targetCol[0] * glimmer + formationPulse - colorArray[i * 3]) * mixSpeed;
            colorArray[i * 3 + 1] += (targetCol[1] * glimmer + formationPulse - colorArray[i * 3 + 1]) * mixSpeed;
            colorArray[i * 3 + 2] += (targetCol[2] * glimmer + formationPulse - colorArray[i * 3 + 2]) * mixSpeed;

            // Dynamic scale for building effect
            sizeArray[i] = (4 + Math.random() * 8) * p.scale * (1 + staggerW * 0.6);
        }

        positionAttr.needsUpdate = true;
        colorAttr.needsUpdate = true;
        sizeAttr.needsUpdate = true;
    });

    return (
        <points ref={pointsRef} geometry={geometry}>
            <pointsMaterial
                size={0.7}
                sizeAttenuation={true}
                vertexColors={true}
                transparent={true}
                map={circleTexture}
                alphaTest={0.001}
                blending={THREE.AdditiveBlending}
                opacity={0.9}
                depthWrite={false}
            />
        </points>
    );
};

const Antigravity = ({
    count = 3500,
    springStrength = 0.025,
    friction = 0.92,
    forceFormation = false
}: AntigravityProps) => {
    return (
        <Canvas
            camera={{ position: [0, 0, 45], fov: 50 }}
            gl={{ antialias: true, alpha: true }}
            style={{ background: 'transparent' }}
            dpr={[1, 2]}
        >
            <ParticleSystem
                count={count}
                springStrength={springStrength}
                friction={friction}
                forceFormation={forceFormation}
            />
        </Canvas>
    );
};

export default Antigravity;
