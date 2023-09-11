"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

import PickCard from "../pick-card"

export function LabelCard() {
  return (
    <PickCard title="Label">
      <div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </div>
    </PickCard>
  )
}
