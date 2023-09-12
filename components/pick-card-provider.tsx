import { ReactNode, createContext, useContext, useState } from "react"

const PickCardContext = createContext({
  activeCards: {},
  toggleCard: (cardName: string) => {},
})

export function PickCardProvider({ children }: { children: ReactNode }) {
  const [activeCards, setActiveCards] = useState({})

  const toggleCard = (cardName: string) => {
    setActiveCards((prevState: {}) => {
      // @ts-ignore TODO: fix noImplicitAny error here
      return { ...prevState, [cardName]: !prevState[cardName] }
    })
    console.log(activeCards)
  }

  return (
    <PickCardContext.Provider value={{ activeCards, toggleCard }}>
      {children}
    </PickCardContext.Provider>
  )
}

export { PickCardContext }
