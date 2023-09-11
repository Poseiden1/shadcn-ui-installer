"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

import PickCard from "../pick-card"

export function CalenderCard() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <PickCard title="Calendar">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </PickCard>
  )
}
