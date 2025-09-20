"use client";
import dynamic from "next/dynamic";
const ProjectTuitionCentre = dynamic(() => import("../../../src/loopix/pages/ProjectTuitionCentre"), { ssr: false });

export default function TuitionCaseStudyPage() {
  return <ProjectTuitionCentre />;
}
