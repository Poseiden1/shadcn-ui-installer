"use client"

import { Textarea } from "@/components/ui/textarea"

import PickCard from "../pick-card"

export function TextareaCard() {
  return (
    <PickCard title="Textarea">
      <Textarea placeholder="Type your message here." />
    </PickCard>
  )
}
