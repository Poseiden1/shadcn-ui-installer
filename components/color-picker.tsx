"use client"

export default function ColorPicker() {
  return (
    <div className="flex items-center">
      <div className={`rounded-full h-9 w-9 absolute`} />
      <div className="rounded-full bg-background ml-0.5 h-8 w-8 absolute" />
      <div className={`rounded-full ml-1.5 h-6 w-6 z-50`} />
    </div>
  )
}
