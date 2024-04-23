import DateBtn from './DateBtn'
import { TFilter } from '../../../types'

interface DateBtnProps {
    onChange: (e: string)=> void
    filterObj: TFilter
}
const DateBtns = ({onChange, filterObj}: DateBtnProps) => {
    const periods = ['Today', 'Last 7 days', 'This month', 'Last 3 months']
    return (
        <div className='flex justify-between w-full'>
            {periods.map((period) => (
                <DateBtn text={period} key={period} onChange = {onChange} filterObj = {filterObj}/>
            ))}
        </div>
    )
}

export default DateBtns