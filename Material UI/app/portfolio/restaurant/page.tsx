import dynamic from "next/dynamic";
const ProjectRestaurant = dynamic(() => import("../../../src/loopix/pages/ProjectRestaurant"), { ssr: false });

export default function RestaurantCaseStudyPage() {
  return <ProjectRestaurant />;
}
