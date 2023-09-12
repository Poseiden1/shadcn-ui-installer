"use client"

import Link from "next/link"
import { AlertDialog } from "@radix-ui/react-alert-dialog"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Toaster } from "@/components/ui/toaster"
import ColorPicker from "@/components/color-picker"
import Components from "@/components/components"
import { Icons } from "@/components/icons"

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
        <p className="max-w-[700px] text-xl text-muted-foreground">
          This tool was built to help you get started with{" "}
          <Link
            href={siteConfig.links.docs}
            className="underline text-secondary-foreground"
          >
            Shadcn/UI
          </Link>
          .
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "default", className: "w-36" })}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline", className: "w-36" })}
        >
          <Icons.gitHub className="h-5 w-5 mr-2" />
          <span>GitHub</span>
        </Link>
      </div>

      <div className="flex flex-row gap-4 mt-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            1. Pick your operating system.
          </h1>
          <p className="max-w-[700px] text-xl text-muted-foreground">
            Depending on your operating system, the installation process will be
            different.
          </p>
          <RadioGroup defaultValue="windows">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="windows" id="r1" />
              <Label htmlFor="r1" className="text-xl">
                Windows
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="linux" id="r2" />
              <Label htmlFor="r2" className="text-xl">
                Linux
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="mac" id="r3" />
              <Label htmlFor="r3" className="text-xl">
                Mac
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="flex flex-row gap-4 mt-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            2. Pick your package manager.
          </h1>
          <p className="max-w-[700px] text-xl text-muted-foreground">
            I highly recommend using <code>bun</code> to install the components.
          </p>
          <RadioGroup defaultValue="bun">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="bun" id="r1" />
              <Label htmlFor="r1" className="text-xl">
                bun
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="npm" id="r2" />
              <Label htmlFor="r2" className="text-xl">
                npm
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pnpm" id="r3" />
              <Label htmlFor="r3" className="text-xl">
                pnpm
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yarn" id="r3" />
              <Label htmlFor="r3" className="text-xl">
                yarn
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="flex flex-row gap-4 mt-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            3. Pick your components.
          </h1>
          <p className="max-w-[700px] text-xl text-muted-foreground">
            You can pick and choose the components you want to install.
          </p>
        </div>
        <div className="h-24 relative flex items-center flex-grow">
          <ColorPicker />
        </div>
      </div>
      <Components />
    </section>
  )
}
