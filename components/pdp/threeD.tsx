"use client"
import {Suspense, useRef} from 'react'
import { Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'

export default function ThreeD() {

    return(
        <div className={"w-full h-96 flex justify-center items-center  mb-12"}>
            <Canvas>
                <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight intensity={0.9}
                               angle={0.1}
                               penumbra={1}
                               position={[10,15,10]}
                               castShadow />
                    <Model/>
                    <OrbitControls enablePan={true}
                                   enableZoom={true}
                                   enableRotate={true}/>
                </Suspense>
            </Canvas>
        </div>
    )
}

function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/3D/Diomede.gltf')
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.Cylinder022.geometry} material={nodes.Cylinder022.material} position={[0.401, 0.52, 0.404]} rotation={[Math.PI / 2, 0, 0]} scale={[0.043, 0.006, 0.043]} />
            <mesh geometry={nodes.Cylinder012.geometry} material={materials['Material.001']} position={[0.446, 0.422, 0.031]} rotation={[-Math.PI, 0, 0]} scale={[0.027, 0.062, 0.027]} />
            <mesh geometry={nodes.Cylinder023.geometry} material={nodes.Cylinder023.material} position={[-0.45, 0.422, 0.031]} rotation={[-Math.PI, 0, 0]} scale={[0.027, 0.062, 0.027]} />
            <mesh geometry={nodes.Cylinder024.geometry} material={nodes.Cylinder024.material} position={[-0.315, 1.523, 0.084]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.065, 0.052, 0.065]} />
            <mesh geometry={nodes.Cube010.geometry} material={nodes.Cube010.material} position={[0.448, 1.513, 0.237]} rotation={[-0.075, 0, 0]} scale={[0.018, 0.066, 0.007]} />
            <mesh geometry={nodes.Cube012.geometry} material={nodes.Cube012.material} position={[-0.328, 1.571, 0.18]} rotation={[-0.074, -0.016, 0.207]} scale={[0.018, 0.066, 0.007]} />
            <mesh geometry={nodes.Cylinder025.geometry} material={nodes.Cylinder025.material} position={[0.45, 1.458, 0.141]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.065, 0.052, 0.065]} />
            <mesh geometry={nodes.Cylinder026.geometry} material={nodes.Cylinder026.material} position={[-0.455, 0.756, 0.026]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.065, 0.052, 0.065]} />
            <mesh geometry={nodes.Cube013.geometry} material={nodes.Cube013.material} position={[-0.468, 0.805, 0.125]} rotation={[0.062, -0.016, 0.207]} scale={[0.018, 0.066, 0.007]} />
            <mesh geometry={nodes.Cylinder027.geometry} material={nodes.Cylinder027.material} position={[-0.385, 1.135, 0.084]} rotation={[0, 0, -0.184]} scale={[0.025, 0.712, 0.024]} />
            <mesh geometry={nodes.Cylinder028.geometry} material={nodes.Cylinder028.material} position={[0.454, 1.307, 0.142]} rotation={[0, 0, 0.02]} scale={[0.025, 0.2, 0.024]} />
            <mesh geometry={nodes.Cylinder029.geometry} material={nodes.Cylinder029.material} position={[0.084, 1.493, 0.142]} rotation={[0, 0, 1.485]} scale={[0.025, 0.712, 0.024]} />
            <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} position={[0, -1.649, 0]} scale={15.281} />
            <mesh geometry={nodes.Cube.geometry} material={materials.Material} scale={[0.581, 1.648, 0.623]} />
            <mesh geometry={nodes.Cube002.geometry} material={materials['Material.001']} position={[0.422, -1.324, 0.007]} rotation={[0, 0, Math.PI]} scale={[0.053, 0.062, 0.239]} />
            <group position={[-0.001, -0.784, 0.006]} scale={[0.363, 0.744, 0.251]}>
                <mesh geometry={nodes.Cube003_1.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube003_2.geometry} material={materials['Material.002']} />
            </group>
            <mesh geometry={nodes.Cube007.geometry} material={materials['Material.001']} position={[-0.421, -1.324, 0.007]} scale={[0.053, 0.062, 0.239]} />
            <mesh geometry={nodes.Sphere.geometry} material={nodes.Sphere.material} position={[-0.329, -1.233, 0.002]} scale={0.026} />
            <group position={[-0.001, 0.782, 0.367]} rotation={[-0.007, 0, 0]} scale={[0.461, 0.319, 0.029]}>
                <mesh geometry={nodes.Cube004_1.geometry} material={materials['Material.003']} />
                <mesh geometry={nodes.Cube004_2.geometry} material={materials['Material.002']} />
            </group>
            <group position={[0, 0.347, 0.048]} scale={[0.361, 0.373, 0.296]}>
                <mesh geometry={nodes.Cube001_1.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube001_2.geometry} material={materials['Material.002']} />
            </group>
            <mesh geometry={nodes.Cube006.geometry} material={materials['Material.001']} position={[0.505, 0.315, 0.399]} scale={[0.032, 0.042, 0.51]} />
            <mesh geometry={nodes.Cube005.geometry} material={materials['Material.001']} position={[0.416, 0.313, 0.032]} scale={[0.058, 0.023, 0.082]} />
            <mesh geometry={nodes.Cube008.geometry} material={materials['Material.001']} position={[-0.418, 0.313, 0.032]} rotation={[Math.PI, 0, Math.PI]} scale={[0.058, 0.023, 0.082]} />
            <mesh geometry={nodes.Cube009.geometry} material={materials['Material.001']} position={[-0.504, 0.315, 0.399]} rotation={[0, 0, Math.PI]} scale={[0.032, 0.042, 0.51]} />
            <group position={[-0.522, -1.582, 0.473]} rotation={[0, 0, -Math.PI / 2]} scale={[0.193, 0.031, 0.193]}>
                <mesh geometry={nodes.Cylinder002_1.geometry} material={materials['Material.006']} />
                <mesh geometry={nodes.Cylinder002_2.geometry} material={materials['Material.008']} />
            </group>
            <group position={[0.521, -1.443, 0.452]} scale={[0.049, 0.05, 0.05]}>
                <mesh geometry={nodes.Cylinder004_1.geometry} material={materials['Material.006']} />
                <mesh geometry={nodes.Cylinder004_2.geometry} material={materials['Material.008']} />
            </group>
            <group position={[0.495, -1.545, -0.495]} rotation={[0, 0, -Math.PI / 2]} scale={[0.104, 0.007, 0.104]}>
                <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.006']} />
                <mesh geometry={nodes.Cylinder006_2.geometry} material={materials['Material.008']} />
            </group>
            <group position={[-0.525, -1.582, -0.421]} rotation={[0, 0, -Math.PI / 2]} scale={[0.193, 0.031, 0.193]}>
                <mesh geometry={nodes.Cylinder011_1.geometry} material={materials['Material.006']} />
                <mesh geometry={nodes.Cylinder011_2.geometry} material={materials['Material.008']} />
            </group>
            <mesh geometry={nodes.Circle001.geometry} material={nodes.Circle001.material} position={[-0.001, -0.508, 0.288]} rotation={[Math.PI / 2, 0, 0]} scale={0.008} />
            <mesh geometry={nodes.Cylinder013.geometry} material={nodes.Cylinder013.material} position={[0.308, 0.519, 0.399]} rotation={[Math.PI / 2, 0, 0]} scale={[0.016, 0.003, 0.016]} />
            <mesh geometry={nodes.Cylinder014.geometry} material={nodes.Cylinder014.material} position={[0.259, 0.519, 0.399]} rotation={[Math.PI / 2, 0, 0]} scale={[0.016, 0.003, 0.016]} />
            <mesh geometry={nodes.Sphere001.geometry} material={nodes.Sphere001.material} position={[-0.405, 0.537, 0.395]} scale={0.007} />
            <mesh geometry={nodes.Sphere002.geometry} material={nodes.Sphere002.material} position={[-0.405, 0.519, 0.395]} scale={0.007} />
            <mesh geometry={nodes.Sphere003.geometry} material={nodes.Sphere003.material} position={[-0.405, 0.502, 0.395]} scale={0.007} />
            <mesh geometry={nodes.Cylinder015.geometry} material={nodes.Cylinder015.material} position={[-0.109, 0.164, 0.292]} rotation={[1.6, 0, 0]} scale={[0.053, 0.009, 0.053]} />
            <mesh geometry={nodes.Cylinder016.geometry} material={nodes.Cylinder016.material} position={[0, 0.164, 0.283]} rotation={[1.59, 0, 0]} scale={[0.032, 0.007, 0.032]} />
            <mesh geometry={nodes.Cylinder017.geometry} material={nodes.Cylinder017.material} position={[0.115, 0.166, 0.295]} rotation={[1.571, -0.273, 0.005]} scale={[0.049, 0.011, 0.049]} />
            <mesh geometry={nodes.Cylinder018.geometry} material={nodes.Cylinder018.material} position={[-0.002, 0.077, 0.283]} rotation={[1.59, 0, 0]} scale={[0.016, 0.003, 0.016]} />
            <mesh geometry={nodes.Cylinder019.geometry} material={nodes.Cylinder019.material} position={[0.077, 0.079, 0.283]} rotation={[1.59, 0, 0]} scale={[0.018, 0.004, 0.018]} />
            <mesh geometry={nodes.Cube011.geometry} material={nodes.Cube011.material} position={[-0.08, 0.082, 0.282]} scale={[0.022, 0.013, 0.005]} />
            <mesh geometry={nodes.Cylinder020.geometry} material={nodes.Cylinder020.material} position={[-0.072, 0.079, 0.286]} rotation={[Math.PI / 2, 0, 0]} scale={[0.006, 0.001, 0.006]} />
            <mesh geometry={nodes.Cylinder021.geometry} material={nodes.Cylinder021.material} position={[-0.089, 0.079, 0.286]} rotation={[Math.PI / 2, 0, 0]} scale={[0.006, 0.001, 0.006]} />
        </group>
    )
}
