"use client"

import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

import PickCard from "../pick-card"

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <PickCard title="Slider">
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn("w-[60%]", className)}
        {...props}
      />
    </PickCard>
  )
}
