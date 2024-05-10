import { format } from "date-fns"
import { generateTimeSeries } from "./generateTImeSeries"

export function getWeekDays(curr, utcval = 0) {
  // Get current date
  const currentDate = curr

  // Get the starting date of the current week (Sunday)
  const firstDayOfWeek = new Date(currentDate)
  firstDayOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 1)

  // Array to store the dates of the week
  const weekDates = []

  // Loop to get each day of the week
  for (let i = 0; i < 5; i++) {
    const date = new Date(firstDayOfWeek)
    date.setDate(firstDayOfWeek.getDate() + i)
    weekDates.push({
      weekDay: format(date, "E"),
      newdate: format(date, "dd/M"),
      timeSeries: generateTimeSeries(utcval),
    })
  }
  //   console.log(weekDates)
  return weekDates
}
