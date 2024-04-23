import Sidebar from '../../sidebar'
import Text from '../../ui/text'
import colors from '../../../utils/colors'
import { close } from '../../../assets'
import Dropdown from '../../ui/dropdown'
import Button from '../../ui/button'
import DateBtns from './DateBtns'
import DateInput from '../../datePicker'
import { TFilter, TFilterProps } from '../../../types'

interface IProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    setFilterObj: React.Dispatch<React.SetStateAction<TFilter>>
    filterObj: TFilter
    applyFilters: (filterObj: TFilter) => void
}

const Filter = ({ isOpen, setIsOpen, filterObj, setFilterObj, applyFilters }: IProps) => {
    const handleChange = (val: string[] | string, prop: TFilterProps) => {
        setFilterObj((prev) => ({
            ...prev, [prop]: val
        }))
    }
    const inCompleteDateRange = ((filterObj?.endDate && !filterObj?.startDate)
        || (!filterObj?.endDate && filterObj?.startDate))
    const enableApplyBtn = () => {
        return Object.keys(filterObj).length > 0 && !inCompleteDateRange
    }

    return (
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className='h-full w-full flex flex-col p-3 justify-between'>
                <div className='flex flex-col gap-[30px]'>
                    <div className='flex justify-between items-center'>
                        <Text color={colors.black_300} fontSize='24px' fontWeight={700} lineHeight='29px'>Filter</Text>
                        <img alt='close' src={close} onClick={() => setIsOpen(false)} />
                    </div>
                    <DateBtns onChange={(e) => handleChange(e, 'days')} filterObj={filterObj} />

                    <div>
                        <Text color={colors.black_300} fontSize='16px' fontWeight={600} lineHeight='24px' className='mb-1'>Date Range</Text>
                        <div className='w-full gap-4 flex justify-between'>
                            <DateInput onChange={(e) => handleChange(e, 'startDate')} tag='Start date' filterObj={filterObj} className='w-[100%]' />
                            <DateInput onChange={(e) => handleChange(e, 'endDate')} tag='End date' filterObj={filterObj} className='w-[40%]' />
                        </div>
                        {
                            inCompleteDateRange &&
                            <Text color={'red'} fontSize='12px' fontWeight={400} lineHeight='14px' className='mt-1'>{
                                !filterObj?.endDate ? 'Please select end date' :
                                    'Please select start date'
                            }</Text>
                        }
                    </div>

                    <div className='w-full'>
                        <Text color={colors.black_300} fontSize='16px' fontWeight={600} lineHeight='24px' className='mb-1'>Transaction Type</Text>
                        <Dropdown
                            attr={'type'}
                            setFilterObj={setFilterObj}
                            filteredObj={filterObj}
                            className='w-full'
                            options={['Store Transactions', 'Get Tipped', 'Withdrawals', 'Chargebacks', 'Cashbacks', 'Deposits']} />
                    </div>

                    <div className='w-full'>
                        <Text color={colors.black_300} fontSize='16px' fontWeight={600} lineHeight='24px' className='mb-1'>Transaction Status</Text>
                        <Dropdown
                            attr={'status'}
                            filteredObj={filterObj}
                            setFilterObj={setFilterObj}
                            className='w-full'
                            options={['Successful', 'Pending', 'Paid']} />
                    </div>
                </div>

                <div className='flex justify-between'>
                    <Button
                        theme='primary-tertiary'
                        className='!rounded-[30px] !w-[45%] !py-2'
                        onClick={() => { setFilterObj({} as TFilter); applyFilters({} as TFilter) }}>
                        <Text color={colors.black_300} fontSize='16px' fontWeight={600} lineHeight='24px'>Clear</Text>
                    </Button>
                    <Button
                        theme={enableApplyBtn() ? 'primary' : 'disabled'}
                        className='!rounded-[30px] !w-[45%] !py-2'
                        onClick={() => { applyFilters(filterObj); setIsOpen(false) }}
                    >
                        <Text color='white' fontSize='16px' fontWeight={600} lineHeight='24px'>Apply</Text>

                    </Button>
                </div>
            </div>
        </Sidebar>
    )
}

export default Filter