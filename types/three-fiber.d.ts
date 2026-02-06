import '@react-three/fiber';
import { Object3DNode, MaterialNode, BufferGeometryNode } from '@react-three/fiber';
import * as THREE from 'three';

declare module '@react-three/fiber' {
    interface ThreeElements {
        instancedMesh: Object3DNode<THREE.InstancedMesh, typeof THREE.InstancedMesh>;
        capsuleGeometry: BufferGeometryNode<THREE.CapsuleGeometry, typeof THREE.CapsuleGeometry>;
        sphereGeometry: BufferGeometryNode<THREE.SphereGeometry, typeof THREE.SphereGeometry>;
        boxGeometry: BufferGeometryNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>;
        tetrahedronGeometry: BufferGeometryNode<THREE.TetrahedronGeometry, typeof THREE.TetrahedronGeometry>;
        icosahedronGeometry: BufferGeometryNode<THREE.IcosahedronGeometry, typeof THREE.IcosahedronGeometry>;
        meshBasicMaterial: MaterialNode<THREE.MeshBasicMaterial, typeof THREE.MeshBasicMaterial>;
        color: Object3DNode<THREE.Color, typeof THREE.Color>;
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            instancedMesh: any;
            capsuleGeometry: any;
            sphereGeometry: any;
            boxGeometry: any;
            tetrahedronGeometry: any;
            icosahedronGeometry: any;
            meshBasicMaterial: any;
            color: any;
        }
    }
}
