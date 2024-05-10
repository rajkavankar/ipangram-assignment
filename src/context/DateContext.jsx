import { createContext, useContext, useState } from "react"

export const DateContext = createContext({
  nextWeek: () => {},
  prevWeek: () => {},
  currDate: null,
  utcVal: null,
  setUtcVal: () => {},
})
export const DateProvider = ({ children }) => {
  const currentDate = new Date()
  const [currDate, setCurrDate] = useState(currentDate)
  const [utcVal, setUtcVal] = useState(0)
  const nextWeek = () => {
    const newDate = new Date(currDate)
    newDate.setDate(newDate.getDate() + 7)
    setCurrDate(newDate)
  }
  const prevWeek = () => {
    const newDate = new Date(currDate)
    newDate.setDate(newDate.getDate() - 7)
    setCurrDate(newDate)
  }
  return (
    <DateContext.Provider
      value={{
        currDate,
        nextWeek,
        prevWeek,
        utcVal,
        setUtcVal,
      }}>
      {children}
    </DateContext.Provider>
  )
}

export const useDateTime = () => {
  return useContext(DateContext)
}
