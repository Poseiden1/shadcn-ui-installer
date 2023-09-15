import { useContext, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowDown, CopyIcon, MousePointerClickIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import { AccordionCard } from "@/components/cards/accordion-card"
import { AlertCard } from "@/components/cards/alert-card"
import { AlertDialogCard } from "@/components/cards/alert-dialog"
import { AspectRatioCard } from "@/components/cards/aspect-ratio-card"
import { AvatarCard } from "@/components/cards/avatar-card"
import { BadgeCard } from "@/components/cards/badge-card"
import { ButtonCard } from "@/components/cards/button-card"
import { CardCard } from "@/components/cards/card-card"
import { CheckboxCard } from "@/components/cards/checkbox-card"
import { CollapsibleCard } from "@/components/cards/collapsible-card"
import { ComboboxCard } from "@/components/cards/combobox-card"
import { CommandCard } from "@/components/cards/command-card"
import { ContextMenuCard } from "@/components/cards/context-menu-card"
import { DataTableCard } from "@/components/cards/data-table-card"
import { DialogCard } from "@/components/cards/dialog-card"
import { DropdownMenuCard } from "@/components/cards/dropdown-menu-card"
import { HoverCardCard } from "@/components/cards/hover-card-card"
import { InputCard } from "@/components/cards/input-card"
import { MenubarCard } from "@/components/cards/menubar-card"
import { NavigationMenuCard } from "@/components/cards/navigation-menu-card"
import { PopoverCard } from "@/components/cards/popover-card"
import { ProgressCard } from "@/components/cards/progress-card"
import { RadioGroupCard } from "@/components/cards/radio-group-card"
import { ScrollAreaCard } from "@/components/cards/scroll-area-card"
import { SelectCard } from "@/components/cards/select-card"
import { SeparatorCard } from "@/components/cards/separator-card"
import { SheetCard } from "@/components/cards/sheet-card"
import { SkeletonCard } from "@/components/cards/skeleton-card"
import { SwitchCard } from "@/components/cards/switch-card"
import { TableCard } from "@/components/cards/table-card"
import { TabsCard } from "@/components/cards/tabs-card"
import { TextareaCard } from "@/components/cards/textarea-card"
import { ToastCard } from "@/components/cards/toast-card"
import { ToggleCard } from "@/components/cards/toggle-card"
import { TooltipCard } from "@/components/cards/tooltip-card"

import CopyCard from "./copy-card"
import { PickCardContext } from "./pick-card-provider"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Label } from "./ui/label"

export default function Components(props: { os: string; pm: string }) {
  const { activeCards, toggleCard } = useContext(PickCardContext)
  const [countCards, setCountCards] = useState<number>(0)
  const [outputScript, setOutputScript] = useState<string>("")
  const installerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let count = 0
    for (let card in activeCards) {
      if (activeCards[card as keyof typeof activeCards]) {
        count++
      }
    }
    setCountCards(count)
    generateScript()
  }, [activeCards])
  const toggleAll = () => {
    for (let card in activeCards) {
      toggleCard(card)
    }
  }

  const generateScript = () => {
    let script = ""
    let pmx = ""
    switch (props.pm) {
      case "npm":
        pmx = "npx"
        break
      case "yarn":
        pmx = "yarn"
        break
      case "pnpm":
        pmx = "pnpx"
        break
      case "bun":
        pmx = "bunx"
        break
    }

    switch (props.os) {
      case "mac":
      case "linux":
        script += "#!/bin/bash\n\n"
        script += "# List of components\ncomponents=(\n"
        // Check if data-table is selected
        if (activeCards["data-table"] && !activeCards["table"]) {
          script += `    "table"\n`
        }

        for (let card in activeCards) {
          if (activeCards[card as keyof typeof activeCards]) {
            if (card == "data-table") continue
            script += `    "${card}"\n`
          }
        }
        script += ")\n\n"
        script += "install_component() {\n"
        script += '    component="$1"\n'
        script += `    echo yes | ${pmx} shadcn-ui@latest add "$component" --overwrite\n}\n\n`
        script += "export -f install_component\n\n"
        if(activeCards["data-table"]) {
        script += `echo ${props.pm} install @tanstack/react-table\n`
        }
        script +=
          'printf "%s\\n" "${components[@]}" | xargs -I {} -P 8 bash -c \'install_component "$@"\' _ {}\n\n'
        script += 'echo "All components installed!"'
        break
    }
    setOutputScript(script)
  }
  const scrollToInstaller = () => {
    installerRef.current?.scrollIntoView({
      behavior: "smooth",
    })
  }
  return (
    <>
      <div className="flex flex-row gap-4 justify-start items-center w-full h-16">
        <Button
          onClick={scrollToInstaller}
          variant={"outline"}
          className="h-12 w-42 fixed bottom-4 right-4 z-50"
        >
          <ArrowDown className="w-4 h-4 mr-2" />
          <span className="text-xl">Scroll to Script</span>
        </Button>
        <Button variant={"outline"} className="h-12 w-42" onClick={toggleAll}>
          <MousePointerClickIcon className="w-4 h-4 mr-2" />
          <span className="text-xl">Toggle all</span>
        </Button>
        <Card className="text-xl h-12 w-64 px-4 flex flex-row gap-4 items-center justify-center">
          <span>selected:</span>
          <span className="font-bold">{countCards.toString()}</span>/
          <span>{Object.keys(activeCards).length}</span>
        </Card>
      </div>
      <div className="grid items-center gap-6 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
        <AccordionCard />
        <AlertCard />
        <AlertDialogCard />
        <AspectRatioCard />
        <AvatarCard />
        <BadgeCard />
        <ButtonCard />
        <CardCard />
        <CheckboxCard />
        <CollapsibleCard />
        <CommandCard />
        <ContextMenuCard />
        <DataTableCard />
        <DialogCard />
        <DropdownMenuCard />
        <HoverCardCard />
        <InputCard />
        <MenubarCard />
        <NavigationMenuCard />
        <PopoverCard />
        <ProgressCard />
        <RadioGroupCard />
        <ScrollAreaCard />
        <SelectCard />
        <SeparatorCard />
        <SheetCard />
        <SkeletonCard />
        <SwitchCard />
        <TableCard />
        <TabsCard />
        <TextareaCard />
        <ToastCard />
        <ToggleCard />
        <TooltipCard />
      </div>
      <div className="flex flex-col gap-4 mt-8" ref={installerRef}>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            4. Install your components.
          </h1>
          <p className="max-w-[700px] text-xl text-muted-foreground">
            You have to initalize{" "}
            <Link
              href={siteConfig.links.docs}
              className="underline text-secondary-foreground"
            >
              Shadcn/UI
            </Link>{" "}
            first.
          </p>
        </div>
        <CopyCard text="npx shadcn-ui@latest init" />
        <p className="max-w-[700px] text-xl text-muted-foreground">
          Create a new file in the folder called
          <code className="border border-primary rounded-md p-1 mx-2">
            installer.sh
          </code>
          and paste the following bash script:
        </p>
        <CopyCard
          text={
            outputScript == ""
              ? "No script yet. Please select some components."
              : outputScript
          }
        />
        <p className="max-w-[700px] text-xl text-muted-foreground">
          Ensure the script has execute permissions.
        </p>
        <CopyCard text="chmod +x installer.sh" />
        <p className="max-w-[700px] text-xl text-muted-foreground">
          Run the script, enjoy!
        </p>
        <CopyCard text="./installer.sh" />
      </div>
    </>
  )
}
