import Navbar from '../components/navbar'
import { useGetUser } from '../api/hooks/useGetUser'
import { useGetWallet } from '../api/hooks/useGetWallet'
import { useGetTransactions } from '../api/hooks/useGetTransactions'
import AppBar from '../components/appBar'


const Home = () => {
  const { userData, getUserloading, getUserError } = useGetUser()
  const { walletData, getWalletloading, getWalletError } = useGetWallet()
  const { trxData, getTrxloading, getTrxError } = useGetTransactions()


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
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home