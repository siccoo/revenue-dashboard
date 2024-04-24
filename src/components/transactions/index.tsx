import React from 'react'
import Header from './header/index'
import TransactionsList from './transactionsList/index'
import { TFilter, TTransaction } from '../../types'
import Text from '../ui/text'

interface IProps {
  trxData: TTransaction[] | undefined
  setFilterObj: React.Dispatch<React.SetStateAction<TFilter>>
  filterObj: TFilter
  setData: React.Dispatch<React.SetStateAction<TTransaction[] | undefined>>
  data: TTransaction[] | undefined
  applyFilters: (filterObj: TFilter) => void
}
const Transactions = ({ data, filterObj, setFilterObj, applyFilters }: IProps) => {

  return (
    <div className='px-[6%] mt-[100px] flex flex-col gap-4'>
      <Header
        noOfTrxs={data?.length ?? 0}
        filterObj={filterObj}
        setFilterObj={setFilterObj}
        applyFilters={applyFilters}
      />
      <hr className='my-4' />
      {
        data && data.length > 0 ?
          <TransactionsList data={data} /> :
          <Text color={'red'} fontSize='16px' fontWeight={600} lineHeight='24px'>{`No data available`}</Text>

      }
    </div>
  )
}

export default Transactions