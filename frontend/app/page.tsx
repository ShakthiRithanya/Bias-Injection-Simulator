import BiasControlPanel from "@/components/BiasControlPanel";
import MetricsPanel from "@/components/MetricsPanel";
import VisualizationCore from "@/components/VisualizationCore";

export default function Home() {
  return (
    <main className="dashboard-grid">
      <BiasControlPanel />
      <VisualizationCore />
      <MetricsPanel />
    </main>
  );
}
