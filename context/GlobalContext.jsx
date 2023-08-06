"use client"

import { createContext, useState } from "react"

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false)

  // handleToggle
  const handleToggle = () => {
    setToggle((prev) => !prev)
  }

  // Global Value
  const value = { toggle, handleToggle }
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}

export default GlobalContext
