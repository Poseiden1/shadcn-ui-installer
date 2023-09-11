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

export default function Components() {
  return (
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
  )
}
