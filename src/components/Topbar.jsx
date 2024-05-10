import { useDateTime } from "@/context/DateContext"
import { format } from "date-fns"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"

const Topbar = () => {
  const { nextWeek, prevWeek, currDate } = useDateTime()
  return (
    <header className='flex justify-between items-center container gap-5 py-5 bg-slate-50 shadow'>
      <div
        className='select-none cursor-pointer flex items-center justify-center gap-2'
        onClick={prevWeek}>
        <FaAngleLeft />
        Previus week
      </div>
      <div className='flex-1 select-none ml-8'>{format(currDate, "PPP")}</div>
      <div
        className='select-none cursor-pointer flex items-center justify-center gap-2'
        onClick={nextWeek}>
        Next week
        <FaAngleRight />
      </div>
    </header>
  )
}

export default Topbar
