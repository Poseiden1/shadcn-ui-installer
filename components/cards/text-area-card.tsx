"use client"

import { Textarea } from "@/components/ui/textarea"

import PickCard from "../pick-card"

export function TextareaCard() {
  return (
    <PickCard title="Text Area">
      <Textarea placeholder="Type your message here." />
    </PickCard>
  )
}
