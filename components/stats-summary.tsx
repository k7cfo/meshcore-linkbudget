"use client"

import type { MeshCoreConfig } from "@/lib/meshcore-data"
import { Card } from "@/components/ui/card"
import { useMemo } from "react"

interface StatsSummaryProps {
  configs: MeshCoreConfig[]
}

export function StatsSummary({ configs }: StatsSummaryProps) {
  const stats = useMemo(() => {
    const kbpsValues = configs.map((c) => c.kbps)
    const chUtilValues = configs.map((c) => c.chUtil)
    const dBmValues = configs.map((c) => c.dBmNoNoise)

    return {
      totalConfigs: configs.length,
      maxKbps: Math.max(...kbpsValues),
      minKbps: Math.min(...kbpsValues),
      maxChUtil: Math.max(...chUtilValues),
      minChUtil: Math.min(...chUtilValues),
      bestSensitivity: Math.min(...dBmValues),
    }
  }, [configs])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <Card className="p-4 bg-card border-border">
        <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1">Total Configs</div>
        <div className="text-2xl font-bold font-mono text-primary">{stats.totalConfigs}</div>
      </Card>

      <Card className="p-4 bg-card border-border">
        <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1">Max Speed</div>
        <div className="text-2xl font-bold font-mono text-emerald-400">{stats.maxKbps.toFixed(2)}</div>
        <div className="text-xs text-muted-foreground font-mono">kbps</div>
      </Card>

      <Card className="p-4 bg-card border-border">
        <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1">Min Speed</div>
        <div className="text-2xl font-bold font-mono text-foreground">{stats.minKbps.toFixed(2)}</div>
        <div className="text-xs text-muted-foreground font-mono">kbps</div>
      </Card>

      <Card className="p-4 bg-card border-border">
        <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1">Best Sensitivity</div>
        <div className="text-2xl font-bold font-mono text-primary">{stats.bestSensitivity.toFixed(2)}</div>
        <div className="text-xs text-muted-foreground font-mono">dBm</div>
      </Card>

      <Card className="p-4 bg-card border-border">
        <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1">Max Ch Util</div>
        <div className="text-2xl font-bold font-mono text-red-400">{stats.maxChUtil.toFixed(2)}%</div>
      </Card>

      <Card className="p-4 bg-card border-border">
        <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1">Min Ch Util</div>
        <div className="text-2xl font-bold font-mono text-emerald-400">{stats.minChUtil.toFixed(2)}%</div>
      </Card>
    </div>
  )
}
