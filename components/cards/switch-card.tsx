"use client"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

import PickCard from "../pick-card"

export function SwitchCard() {
  return (
    <PickCard title="Switch">
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    </PickCard>
  )
}
