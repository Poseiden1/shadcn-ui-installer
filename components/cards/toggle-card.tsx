"use client"

import { Bold } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

import PickCard from "../pick-card"

export function ToggleCard() {
  return (
    <PickCard title="Toggle">
      <Toggle aria-label="Toggle italic">
        <Bold className="h-4 w-4" />
      </Toggle>
    </PickCard>
  )
}
