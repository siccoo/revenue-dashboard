import Navbar from '../components/navbar'
import AppBar from '../components/appBar'

const Home = () => {
    return (
        <div className='w-full p-[1.5%] !pt-0'>
    
          <div className='w-[100%]'>
            <div className='fixed'>
              <div className='h-[20px] bg-white'></div>
              <Navbar user={undefined} />
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