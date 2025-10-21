import { meshCoreConfigs } from "@/lib/meshcore-data"
import { MeshCoreTable } from "@/components/meshcore-table"
import { StatsSummary } from "@/components/stats-summary"
import { Radio, AlertTriangle } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Radio className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground font-sans">MeshCore Link Budget</h1>
                <p className="text-sm text-muted-foreground font-mono">
                  Radio configuration settings and performance metrics
                </p>
              </div>
            </div>
            <a
              href="https://discord.gg/wcmesh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg font-medium transition-colors border border-primary/20 hover:border-primary/30"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-3">
          <a
            href="https://wcmesh.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-sm text-muted-foreground hover:text-foreground font-mono transition-colors"
          >
            🔗 Sponsored By West Coast Mesh
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8 flex-1">
        <StatsSummary configs={meshCoreConfigs} />
        <MeshCoreTable configs={meshCoreConfigs} />
      </div>

      <footer className="border-t border-border bg-card/80 backdrop-blur-sm mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-start gap-3 max-w-4xl mx-auto">
            <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-foreground font-sans">Disclaimer: Best Case Scenarios Only</h3>
              <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                The statistics and performance metrics displayed on this page represent{" "}
                <strong className="text-foreground">best case scenarios</strong> under ideal conditions. These
                calculations{" "}
                <strong className="text-foreground">do not account for real-world RF interference (RFI)</strong>,
                environmental factors such as terrain, buildings, weather conditions, or other signal degradation
                sources. The information provided is{" "}
                <strong className="text-foreground">for reference purposes only</strong> and may not reflect actual
                performance in deployed conditions. Always conduct field testing to validate performance in your
                specific environment.
              </p>
              <p className="text-xs text-muted-foreground font-mono">
                For a detailed LoRa calculator visit{" "}
                <a
                  href="https://www.semtech.com/design-support/lora-calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline transition-colors"
                >
                  https://www.semtech.com/design-support/lora-calculator
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
