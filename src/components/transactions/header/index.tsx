import React from 'react'
import HeaderText from './HeaderText'
import HeaderBtns from './HeaderBtns'
import { TFilter } from '../../../types'

interface IProps {
  noOfTrxs: number
  setFilterObj: React.Dispatch<React.SetStateAction<TFilter>>
  filterObj: TFilter
  applyFilters: (filterObj: TFilter) => void
}
const Header = ({ noOfTrxs, filterObj, setFilterObj, applyFilters }: IProps) => {
  return (
    <div className='flex justify-between'>
      <HeaderText noOfTrxs={noOfTrxs} filterObj = {filterObj}/>
      <HeaderBtns
        filterObj={filterObj}
        setFilterObj={setFilterObj}
        applyFilters = {applyFilters}
      />
    </div>
  )
}

export default Header