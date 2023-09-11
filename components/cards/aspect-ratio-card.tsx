"use client"

import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"

import PickCard from "../pick-card"

export function AspectRatioCard() {
  return (
    <PickCard title="Aspect Ratio">
      <AspectRatio ratio={16 / 9} className="bg-muted m-4">
        <Image
          src="https://picsum.photos/1200/800"
          alt="Random image from picsum.photos"
          fill
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </PickCard>
  )
}
