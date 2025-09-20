import dynamic from "next/dynamic";
const ProjectClinicIntake = dynamic(() => import("../../../src/loopix/pages/ProjectClinicIntake"), { ssr: false });

export default function ClinicCaseStudyPage() {
  return <ProjectClinicIntake />;
}
