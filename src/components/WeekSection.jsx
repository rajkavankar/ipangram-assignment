import { useCallback, useEffect, useState } from "react"
import { getWeekDays } from "../helpers/getWeekDays"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"
import { useDateTime } from "@/context/DateContext"
import { data } from "../data/data"
import { format } from "date-fns"

const WeekSection = () => {
  const { currDate, utcVal } = useDateTime()
  const [weeks, setWeeks] = useState(getWeekDays(currDate, utcVal))

  const updateWeek = useCallback(() => {
    const parsedData = data.map((item) => {
      return {
        date: format(new Date(item.date), "dd/M"),
        time: item.time,
      }
    })
    setWeeks((w) => [
      ...w.map((val) => {
        return {
          ...val,
          timeSeries: val.timeSeries.map((item) => {
            return {
              // newDate: val.newDate,
              // weekDay: val.weekDay,
              timeSeries: {
                ...item,
                active: parsedData.find(
                  (value) =>
                    value.date === val.newdate && value.time === item.time
                )
                  ? true
                  : false,
              },
            }
          }),
        }
      }),
    ])
  }, [])

  useEffect(() => {
    setWeeks(getWeekDays(currDate, utcVal))
    updateWeek()
  }, [currDate, utcVal, updateWeek])

  // console.log(w);

  useEffect(() => {}, [])
  console.log(weeks)

  return (
    <div className='space-y-5'>
      {weeks.map((item, i) => (
        <div key={i}>
          <div className='flex justify-center items-center gap-8 mb-2'>
            <div>
              {item.weekDay}
              <br />
              {item.newdate}
            </div>
            <div className='grid grid-cols-10 gap-3'>
              {item.timeSeries.map((time, i) => (
                <div key={i} className='flex justify-center items-center gap-2'>
                  <Checkbox
                    checked={time.active || time.timeSeries?.active}
                    onCheckedChange={(val) => !val.checked}
                    id={`${time.timeSeries?.time}-${item.newdate}`}
                  />
                  <Label htmlFor={`${time.timeSeries?.time}-${item.newdate}`}>
                    {time.timeSeries?.time}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default WeekSection
