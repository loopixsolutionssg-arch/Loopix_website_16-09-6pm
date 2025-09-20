"use client";
import dynamic from "next/dynamic";
const PortfolioPage = dynamic(() => import("../../src/loopix/pages/PortfolioPage"), { ssr: false });

export default function PortfolioIndexPage() {
  return <PortfolioPage />;
}
