import dynamic from "next/dynamic";
const ProjectStartupDashboard = dynamic(() => import("../../../src/loopix/pages/ProjectStartupDashboard"), { ssr: false });

export default function StartupCaseStudyPage() {
  return <ProjectStartupDashboard />;
}
