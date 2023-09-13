import { useContext, useEffect, useState } from "react"
import { CopyIcon, MousePointerClickIcon } from "lucide-react"

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
import { TextareaCard } from "@/components/cards/text-area-card"
import { ToastCard } from "@/components/cards/toast-card"
import { ToggleCard } from "@/components/cards/toggle-card"
import { TooltipCard } from "@/components/cards/tooltip-card"

import { PickCardContext } from "./pick-card-provider"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Label } from "./ui/label"

export default function Components(props: { os: string; pm: string }) {
  const { activeCards, toggleCard } = useContext(PickCardContext)
  const [countCards, setCountCards] = useState<number>(0)

  useEffect(() => {
    let count = 0
    for (let card in activeCards) {
      if (activeCards[card as keyof typeof activeCards]) {
        count++
      }
    }
    setCountCards(count)
  }, [activeCards])
  const toggleAll = () => {
    for (let card in activeCards) {
      toggleCard(card)
    }
  }

  const copyScript = () => {
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
      case "linux2":
        script += "#!/bin/bash\n\n"
        script += "# List of components\ncomponents=(\n"
        for (let card in activeCards) {
          if (activeCards[card as keyof typeof activeCards]) {
            script += `    "${card}"\n`
          }
        }
        script += ")\n\n#Loop through each component and install it\n"
        script += 'for component in "${components[@]}"; do\n'
        script += '    echo "Installing $component..."\n'
        script += `    echo yes | ${pmx} shadcn-ui@latest add $component\n`
        script += '    echo "$component installed!"\n'
        script += "done\n\n"
        script += 'echo "All components installed!"'
        break
      case "mac":
      case "linux":
        script += "#!/bin/bash\n\n"
        script += "# List of components\ncomponents=(\n"
        for (let card in activeCards) {
          if (activeCards[card as keyof typeof activeCards]) {
            script += `    "${card}"\n`
          }
        }
        script += ")\n\n"
        script += "install_component() {\n"
        script += '    component="$1"\n'
        script += `    echo yes | ${pmx} shadcn-ui@latest add "$component" --overwrite\n}\n\n`
        script += "export -f install_component\n\n"
        script +=
          'printf "%s\\n" "${components[@]}" | xargs -I {} bash -c \'install_component "$@"\' _ {}\n\n'
        script += 'echo "All components installed!"'
        break
    }
    console.log(script)
    navigator.clipboard.writeText(script)
  }

  return (
    <>
      <div className="flex flex-row gap-4 justify-start items-center w-full h-16">
        <Button
          onClick={copyScript}
          variant={"outline"}
          className="h-12 w-42 fixed bottom-4 right-4"
        >
          <CopyIcon className="w-4 h-4 mr-2" />
          <span className="text-xl">Copy Script</span>
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
        <ComboboxCard />
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
    </>
  )
}
