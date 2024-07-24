import {
    Float,
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
  
} from "@react-three/drei";


// NOURISH DEMO MESH


const Animation1 = () => {
  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.1}
      polar={[-0.1, Math.PI / 4]}
      rotation={[1, 1, 0]}
    >
      <Stage environment={"city"} intensity={0.6} shadows={false}>
        {/* <Float
        speed={1}
        rotationIntensity={1}
        floatIntensity={1}
        floatingRange={[0, 1]}
        > */}

        
        <mesh>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
        {/* </Float> */}
      </Stage>

    </PresentationControls>
  );
};

export default Animation1;
