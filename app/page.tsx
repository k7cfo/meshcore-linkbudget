import { meshCoreConfigs } from "@/lib/meshcore-data"
import { MeshCoreTable } from "@/components/meshcore-table"
import { StatsSummary } from "@/components/stats-summary"
import { Radio } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
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

      <div className="container mx-auto px-4 py-8 space-y-8">
        <StatsSummary configs={meshCoreConfigs} />
        <MeshCoreTable configs={meshCoreConfigs} />
      </div>
    </main>
  )
}
