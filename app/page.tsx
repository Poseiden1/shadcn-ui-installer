"use client"

import Link from "next/link"
import { AlertDialog } from "@radix-ui/react-alert-dialog"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Toaster } from "@/components/ui/toaster"
import Components from "@/components/components"
import { Icons } from "@/components/icons"
import ColorPicker from "@/components/color-picker"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <Toaster />
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Shadcn / UI Installer
        </h1>
        <p className="max-w-[700px] text-xl text-muted-foreground">
          Install all the components you need with a single command, or pick and
          choose the ones you want.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Get Started
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          <Icons.gitHub className="h-5 w-5 mr-2" />
          <span>GitHub</span>
        </Link>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            Pick your components.
          </h1>
          <p className="max-w-[700px] text-xl text-muted-foreground">
            You can pick and choose the components you want to install.
          </p>
        </div>
        <div className="h-24 relative flex items-center flex-grow">
          <ColorPicker/>
        </div>
      </div>
      <Components />
    </section>
  )
}
