import { Nav } from "./components/sections/Nav";
import { Hero } from "./components/sections/Hero";
import { ExecutiveSummary } from "./components/sections/ExecutiveSummary";
import { UseCases } from "./components/sections/UseCases";
import { Architecture } from "./components/sections/Architecture";
import { PlatformComparison } from "./components/sections/PlatformComparison";
import { AIAgents } from "./components/sections/AIAgents";
import { Roadmap } from "./components/sections/Roadmap";
import { ROI } from "./components/sections/ROI";
import { FinalRecommendation } from "./components/sections/FinalRecommendation";
import { Footer } from "./components/sections/Footer";

export default function App() {
  return (
    <div
      style={{
        background: "#08080e",
        minHeight: "100vh",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        color: "#fff",
      }}
    >
      <Nav />
      <Hero />
      <div id="summary">
        <ExecutiveSummary />
      </div>
      <div id="usecases">
        <UseCases />
      </div>
      <div id="architecture">
        <Architecture />
      </div>
      <div id="platforms">
        <PlatformComparison />
      </div>
      <div id="agents">
        <AIAgents />
      </div>
      <div id="roadmap">
        <Roadmap />
      </div>
      <div id="roi">
        <ROI />
      </div>
      <FinalRecommendation />
      <Footer />
    </div>
  );
}
