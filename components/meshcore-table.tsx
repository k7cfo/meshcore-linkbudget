"use client"

import { useState, useMemo } from "react"
import type { MeshCoreConfig } from "@/lib/meshcore-data"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ArrowUpDown, ArrowUp, ArrowDown, HelpCircle } from "lucide-react"

interface MeshCoreTableProps {
  configs: MeshCoreConfig[]
}

type SortKey = keyof MeshCoreConfig | null
type SortDirection = "asc" | "desc"

export function MeshCoreTable({ configs }: MeshCoreTableProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPreset, setSelectedPreset] = useState<string>("all")
  const [sortKey, setSortKey] = useState<SortKey>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc")

  const uniquePresets = useMemo(() => {
    const presets = Array.from(new Set(configs.map((c) => c.presetName)))
    return presets.sort()
  }, [configs])

  const filteredConfigs = useMemo(() => {
    return configs.filter((config) => {
      const matchesSearch =
        config.presetName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        config.spreadingFactor.toString().includes(searchTerm) ||
        config.bandwidthKhz.toString().includes(searchTerm)

      const matchesPreset = selectedPreset === "all" || config.presetName === selectedPreset

      return matchesSearch && matchesPreset
    })
  }, [configs, searchTerm, selectedPreset])

  const sortedConfigs = useMemo(() => {
    if (!sortKey) return filteredConfigs

    return [...filteredConfigs].sort((a, b) => {
      const aValue = a[sortKey]
      const bValue = b[sortKey]

      if (typeof aValue === "string" && typeof bValue === "string") {
        const comparison = aValue.localeCompare(bValue)
        return sortDirection === "asc" ? comparison : -comparison
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortDirection === "asc" ? aValue - bValue : bValue - aValue
      }

      return 0
    })
  }, [filteredConfigs, sortKey, sortDirection])

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      // Toggle direction if same column
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      // New column, default to ascending
      setSortKey(key)
      setSortDirection("asc")
    }
  }

  const renderSortIcon = (key: SortKey) => {
    if (sortKey !== key) {
      return <ArrowUpDown className="w-3 h-3 opacity-40" />
    }
    return sortDirection === "asc" ? (
      <ArrowUp className="w-3 h-3 text-primary" />
    ) : (
      <ArrowDown className="w-3 h-3 text-primary" />
    )
  }

  const getPerformanceColor = (chUtil: number) => {
    if (chUtil > 150) return "text-red-400"
    if (chUtil > 100) return "text-yellow-400"
    if (chUtil > 50) return "text-green-400"
    return "text-emerald-400"
  }

  return (
    <TooltipProvider>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 max-w-md">
            <Input
              placeholder="Search presets, spreading factor, bandwidth..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-secondary border-border font-mono text-sm"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Filter by preset:</span>
            <Select value={selectedPreset} onValueChange={setSelectedPreset}>
              <SelectTrigger className="w-[240px] bg-secondary border-border font-mono text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Presets</SelectItem>
                {uniquePresets.map((preset) => (
                  <SelectItem key={preset} value={preset}>
                    {preset}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          Showing {filteredConfigs.length} of {configs.length} configurations
        </div>

        <div className="border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-card">
                  <th
                    className="text-left p-4 font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground transition-colors select-none"
                    onClick={() => handleSort("presetName")}
                  >
                    <div className="flex items-center gap-2">
                      Preset Name
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle
                            className="w-3.5 h-3.5 text-muted-foreground hover:text-foreground cursor-help"
                            onClick={(e) => e.stopPropagation()}
                          />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p className="text-sm">
                            Presets are a mix from Meshtastic and MeshCore. These settings are generally not available
                            in the MeshCore apps.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                      {renderSortIcon("presetName")}
                    </div>
                  </th>
                  <th
                    className="text-right p-4 font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground transition-colors select-none"
                    onClick={() => handleSort("spreadingFactor")}
                  >
                    <div className="flex items-center justify-end gap-2">
                      SF
                      {renderSortIcon("spreadingFactor")}
                    </div>
                  </th>
                  <th
                    className="text-right p-4 font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground transition-colors select-none"
                    onClick={() => handleSort("bandwidthKhz")}
                  >
                    <div className="flex items-center justify-end gap-2">
                      Bandwidth (kHz)
                      {renderSortIcon("bandwidthKhz")}
                    </div>
                  </th>
                  <th
                    className="text-right p-4 font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground transition-colors select-none"
                    onClick={() => handleSort("kbps")}
                  >
                    <div className="flex items-center justify-end gap-2">
                      kbps
                      {renderSortIcon("kbps")}
                    </div>
                  </th>
                  <th
                    className="text-right p-4 font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground transition-colors select-none"
                    onClick={() => handleSort("dBmNoNoise")}
                  >
                    <div className="flex items-center justify-end gap-2">
                      dBm No Noise
                      {renderSortIcon("dBmNoNoise")}
                    </div>
                  </th>
                  <th
                    className="text-right p-4 font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground transition-colors select-none"
                    onClick={() => handleSort("symbolTimeMs")}
                  >
                    <div className="flex items-center justify-end gap-2">
                      Symbol Time (ms)
                      {renderSortIcon("symbolTimeMs")}
                    </div>
                  </th>
                  <th
                    className="text-right p-4 font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground transition-colors select-none"
                    onClick={() => handleSort("chUtil")}
                  >
                    <div className="flex items-center justify-end gap-2">
                      Ch Util (%)
                      {renderSortIcon("chUtil")}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedConfigs.map((config, index) => (
                  <tr key={index} className="border-b border-border hover:bg-secondary/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="font-mono text-xs">
                          {config.presetName}
                        </Badge>
                      </div>
                    </td>
                    <td className="p-4 text-right font-mono text-sm text-foreground">{config.spreadingFactor}</td>
                    <td className="p-4 text-right font-mono text-sm text-foreground">{config.bandwidthKhz}</td>
                    <td className="p-4 text-right font-mono text-sm text-primary">{config.kbps.toFixed(2)}</td>
                    <td className="p-4 text-right font-mono text-sm text-foreground">{config.dBmNoNoise.toFixed(2)}</td>
                    <td className="p-4 text-right font-mono text-sm text-foreground">
                      {config.symbolTimeMs.toFixed(2)}
                    </td>
                    <td
                      className={`p-4 text-right font-mono text-sm font-semibold ${getPerformanceColor(config.chUtil)}`}
                    >
                      {config.chUtil.toFixed(2)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredConfigs.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">No configurations found matching your filters.</div>
        )}
      </div>
    </TooltipProvider>
  )
}
