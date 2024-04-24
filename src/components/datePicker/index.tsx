import { useEffect, useRef, useState } from 'react';
import { useCloseOnclickOutside } from '../../hooks/useOutsideClickClose';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { formatDate2, formatDateToMMDDYYYY } from '../../utils/formatDate';
import { TFilter } from '../../types';
import { arrowDown } from '../../assets';

interface DateInputProps {
    className?: string
    onChange: (e: string) => void
    tag: string
    filterObj: TFilter
}


const DateInput = ({ onChange, tag, filterObj }: DateInputProps) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [showMenu, setShowMenu] = useState(false);
    const ref = useRef(null)

    useCloseOnclickOutside({ ref, setShow: setShowMenu })

    const handleChange = (date: Date | null) => {
        if (date) {
            setSelectedDate(date)
            onChange(date.toString())
        }
    }
    useEffect(() => {
        if (Object.keys(filterObj).length === 0) {
            setSelectedDate(null)
        }
    }, [filterObj])

    // THESE BELOW FUNCTIONS ARE TO ENSURE THAT START DATE IS NOT GREATER THAN END DATE AND VICE VERSA.
    const getMaxDate = () => {
        if (tag === 'Start date') {
            return filterObj?.endDate ? new Date(formatDateToMMDDYYYY(filterObj.endDate)) : new Date()
        } else {
            return new Date()
        }
    }
    const getMinDate = () => {
        if (tag === 'End date') {
            return filterObj?.startDate ? new Date(formatDateToMMDDYYYY(filterObj.startDate)) : null
        } else {
            return null
        }
    }
    return (
        <label className='relative flex items-center'>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => handleChange(date)}
                className='border bg-[#EFF1F6] w-full cursor-pointer rounded-md border shadow-sm px-4 py-3 text-[14px] leading-[16px] text-[#131316]'
                maxDate={getMaxDate()}
                minDate={getMinDate()}
                value={selectedDate ? formatDate2(selectedDate?.toString()) : tag} />

            <img src={arrowDown} alt='arr' className='absolute right-3 h-[20px] ml-1' />
        </label>
    );
};

export default DateInput;
