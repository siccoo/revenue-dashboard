import { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import Balance from '../components/balance'
import { useGetUser } from '../api/hooks/useGetUser'
import { useGetWallet } from '../api/hooks/userGetWallet'
import { useGetTransactions } from '../api/hooks/useGetTransactions'
import Transactions from '../components/transactions'
import { TFilter } from '../types'
import { filterByDays } from '../components/transactions/filter/utils/filterByDays'
import { filterByDateRange } from '../components/transactions/filter/utils/filterByRange'
import { filterByType } from '../components/transactions/filter/utils/filterByType'
import { filterByStatus } from '../components/transactions/filter/utils/filterByStatus'
import Skeleton from '../components/skeletons'
import Text from '../components/ui/text'
import AppBar from '../components/appBar'

const Home = () => {
  const { userData, getUserloading, getUserError } = useGetUser()
  const { walletData, getWalletloading, getWalletError } = useGetWallet()
  const { trxData, getTrxloading, getTrxError } = useGetTransactions()
  const [filterObj, setFilterObj] = useState<TFilter>({} as TFilter)
  const [data, setData] = useState(trxData?.data)

  trxData?.data.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  const applyFilters = (filterObj: TFilter) => {
    const filteredByDays = filterByDays(trxData?.data, filterObj)
    const filteredByRange = filterByDateRange(filteredByDays, filterObj)
    const fiteredByType = filterByType(filteredByRange, filterObj)
    const finalResult = filterByStatus(fiteredByType, filterObj)

    setData(finalResult)
  }
  useEffect(() => {
    setData(trxData?.data)
  }, [trxData])

  const loading = getUserloading || getWalletloading || getTrxloading
  const error = getWalletError || getTrxError || getUserError

  return (
    <div className='w-full p-[1.5%] !pt-0'>

      <div className='w-[100%]'>
        <div className='fixed'>
          <div className='h-[20px] bg-white'></div>
          <Navbar user={userData?.data} />
        </div>
        <div className='flex'>
          <div className=' fixed h-[130vh] flex items-center'>
            <AppBar />
          </div>
          <div className='flex-1'>
            {
              loading ?
                <div className='w-[100%] pt-[100px]'>
                  <Skeleton />
                </div> :
                error ?
                  <Text color='red' fontSize='14px' fontWeight={600} lineHeight='16px' className='text-center'>{`An error occured, please try again`}</Text> :
                  <>
                    <Balance walletData={walletData?.data} trxData={data} />
                    <Transactions
                      trxData={data}
                      applyFilters={applyFilters} data={data}
                      filterObj={filterObj} setData={setData}
                      setFilterObj={setFilterObj} />
                  </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home