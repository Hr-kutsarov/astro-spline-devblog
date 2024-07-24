import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Animation1 from "./Animation1";


// NOURISH DEMO CANVAS


const DemoSection = () => {
  // css
  const section1: string = "flex w-full h-full items-center justify-center";
  const section1bg: string =
    "bg-gradient-to-b from-slate-950 via-slate-900 to-zinc-950";

  // render
  return (
    <section id="demo" className={cn(section1, section1bg, "min-h-[100vh]")}>
      <Canvas
      camera={{ fov: 75, near: 1 , far: 15, position: [7, 15, 60]}}
      >
        {/* <color attach="background" args={[""]} /> */}
        <Animation1 />
      </Canvas>
    </section>
  );
};

export default DemoSection;
