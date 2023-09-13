"use client"

import { useContext, useState } from "react"
import { Plus } from "lucide-react"

import { PickCardContext } from "./pick-card-provider"
import { Button } from "./ui/button"
import { Card } from "./ui/card"

// This is the interface for the props
interface PickCardProps {
  title: string
  children: React.ReactNode
}

export default function PickCard(props: PickCardProps) {
  const { activeCards, toggleCard } = useContext(PickCardContext)

  // add border if state is active
  return (
    <Card
      onClick={() => toggleCard(props.title.toLowerCase().replace(" ", "-"))}
      className={
        `w-full h-96 pb-16 px-12 pt-24 2xl:pb:12 relative flex items-center justify-center ` +
        // @ts-ignore TODO: fix noImplicitAny error here
        (activeCards[props.title.toLowerCase().replace(" ", "-")]
          ? "border-2 border-primary"
          : "border-2 border-primary-foreground")
      }
    >
      <span className="absolute top-8 left-8 text-2xl font-bold leading-tight tracking-tighter md:text-3xl">
        {props.title}
      </span>
      {props.children}
    </Card>
  )
}
