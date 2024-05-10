import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useDateTime } from "@/context/DateContext"

const UtcZoneSelector = () => {
  const { utcVal, setUtcVal } = useDateTime()
  return (
    <div>
      <Select defaultValue={utcVal} onValueChange={(val) => setUtcVal(val)}>
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Select UTC time zone' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={0}>UTC - 0</SelectItem>
          <SelectItem value={5}>UTC - 5</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default UtcZoneSelector
