import { ReactNode, createContext, useContext, useState } from "react"

type PickCardStates = {
  accordion: boolean
  alert: boolean
  "alert-dialog": boolean
  "aspect-ratio": boolean
  avatar: boolean
  badge: boolean
  button: boolean
  card: boolean
  checkbox: boolean
  collapsible: boolean
  combobox: boolean
  command: boolean
  "context-menu": boolean
  "data-table": boolean
  dialog: boolean
  "dropdown-menu": boolean
  "hover-card": boolean
  input: boolean
  menubar: boolean
  "navigation-menu": boolean
  popover: boolean
  progress: boolean
  "radio-group": boolean
  "scroll-area": boolean
  select: boolean
  separator: boolean
  sheet: boolean
  skeleton: boolean
  switch: boolean
  table: boolean
  tabs: boolean
  "text-area": boolean
  toast: boolean
  toggle: boolean
  tooltip: boolean
}

const PickCardContext = createContext({
  activeCards: {} as PickCardStates,
  toggleCard: (cardName: string) => {},
})

export function PickCardProvider({ children }: { children: ReactNode }) {
  const [activeCards, setActiveCards] = useState<PickCardStates>({
    accordion: false,
    alert: false,
    "alert-dialog": false,
    "aspect-ratio": false,
    avatar: false,
    badge: false,
    button: false,
    card: false,
    checkbox: false,
    collapsible: false,
    combobox: false,
    command: false,
    "context-menu": false,
    "data-table": false,
    dialog: false,
    "dropdown-menu": false,
    "hover-card": false,
    input: false,
    menubar: false,
    "navigation-menu": false,
    popover: false,
    progress: false,
    "radio-group": false,
    "scroll-area": false,
    select: false,
    separator: false,
    sheet: false,
    skeleton: false,
    switch: false,
    table: false,
    tabs: false,
    "text-area": false,
    toast: false,
    toggle: false,
    tooltip: false,
  })

  const toggleCard = (cardName: string) => {
    setActiveCards((prevState: PickCardStates) => {
      return {
        ...prevState,
        [cardName]: !prevState[cardName as keyof PickCardStates],
      }
    })
  }

  return (
    <PickCardContext.Provider value={{ activeCards, toggleCard }}>
      {children}
    </PickCardContext.Provider>
  )
}

export { PickCardContext }
