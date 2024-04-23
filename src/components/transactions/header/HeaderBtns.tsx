import React, { useState } from 'react'
import Button from '../../ui/button'
import { download, expand_more } from '../assets'
import Text from '../../ui/text'
import colors from '../../../helperFunctions/colors'
import Filter from '../filter'
import { TFilter } from '../../../types'

interface IProps {
    setFilterObj: React.Dispatch<React.SetStateAction<TFilter>>
    filterObj: TFilter
    applyFilters: (filterObj: TFilter) => void
}
const HeaderBtns = ({ filterObj, applyFilters, setFilterObj }: IProps) => {
    const [openFilter, setOpenFilter] = useState(false)
    const noOfFilters = Object.keys(filterObj)?.length
    return (
        <div className='flex gap-4'>
            <Button theme='secondary' className='rounded-[30px] !gap-[6px]' size='md' iconSize='xs' iconRight={expand_more} onClick={() => setOpenFilter(true)}>
                <Text color={colors.black_300} fontWeight={600} fontSize='16px' lineHeight='24px'>Filter</Text>
                {noOfFilters > 0 && <Button theme='primary' className='rounded-[50%] !px-2 !py-1'>
                    <Text color={'white'} fontWeight={500} fontSize='11px' lineHeight='13px'>{noOfFilters}</Text>
                </Button>}
            </Button>
            <Filter
                isOpen={openFilter} setIsOpen={setOpenFilter}
                filterObj={filterObj} setFilterObj={setFilterObj}
                applyFilters = {applyFilters}
            />
            <Button theme='secondary' className='rounded-[30px]' size='md' iconSize='xs' iconRight={download}>
                <Text color={colors.black_300} fontWeight={600} fontSize='16px' lineHeight='24px'>Export List</Text>
            </Button>
        </div>
    )
}

export default HeaderBtns