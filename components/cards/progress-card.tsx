"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

import PickCard from "../pick-card"

export function ProgressCard() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <PickCard title="Progress">
      <Progress value={progress} className="w-[60%]" />
    </PickCard>
  )
}
