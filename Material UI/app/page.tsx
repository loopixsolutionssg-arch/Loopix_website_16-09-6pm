"use client";
import dynamic from "next/dynamic";
const LoopixLanding = dynamic(() => import("../src/loopix/LoopixLanding"), { ssr: false });

export default function Page() {
  return <LoopixLanding />;
}
