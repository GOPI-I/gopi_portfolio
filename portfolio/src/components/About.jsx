import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import { ABOUT_TEXT } from '../constants';

const FloatingCube = ({ position, color, size = 0.4 }) => {
  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
      <mesh position={position}>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial color={color} roughness={0.1} metalness={0.3} />
      </mesh>
    </Float>
  );
};

const PortfolioScene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 1]} intensity={0.8} color="#ffffff" />
      <directionalLight position={[-1, -1, -1]} intensity={0.5} color="#61dafb" />
      
      {/* Floating cubes */}
      <FloatingCube position={[-1.5, 0.5, 0]} color="#61dafb" />
      <FloatingCube position={[1, -0.5, 0.5]} color="#f7df1e" />
      <FloatingCube position={[0, 1, -0.5]} color="#e34c26" />
      <FloatingCube position={[0.5, -1, 0]} color="#2965f1" />
      
      {/* Title */}
      <Text
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        fontSize={0.5}
        color="#61dafb"
        position={[0, 0, 0]}
      >
        Developer
      </Text>
      
      {/* Controls */}
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
      />
    </>
  );
};

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-5 w-full">
      {/* 3D Canvas - Full width on mobile, half on desktop */}
      <div className="w-full lg:w-1/2 h-96 lg:h-[500px] rounded-lg overflow-hidden">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
        >
          <PortfolioScene />
        </Canvas>
      </div>
      
      {/* About Text - Full width on mobile, half on desktop */}
      <div className="w-full lg:w-1/2 p-5 text-base lg:text-lg leading-relaxed">
        {ABOUT_TEXT}
      </div>
    </div>
  );
};

export default About;