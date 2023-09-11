"use client"

import { Terminal, Waves } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import PickCard from "../pick-card"

export function AlertCard() {
  return (
    <PickCard title="Alert">
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </PickCard>
  )
}
