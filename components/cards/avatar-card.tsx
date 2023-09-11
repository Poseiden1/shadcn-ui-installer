"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import PickCard from "../pick-card"

export function AvatarCard() {
  return (
    <PickCard title="Avatar">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </PickCard>
  )
}
