"use client"

import { Input } from "@/components/ui/input"

import PickCard from "../pick-card"

export function InputCard() {
  return (
    <PickCard title="Input">
      <Input type="email" placeholder="Email" />
    </PickCard>
  )
}
