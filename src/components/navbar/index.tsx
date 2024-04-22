import NavMenu from './NavMenu'
import { logo } from '../../assets'
import NavIcons from './NavIcons'
import { TUser } from '../../types'

interface IProps {
    user: TUser | undefined
}

const Navbar = ({user}: IProps) => {
  return (
    <div className='px-[1%] py-4 w-[97vw] bg-[white] rounded-[40px] shadow flex justify-between'>
            <img src={logo} alt='' />
            <NavMenu />
        <NavIcons user = {user}/>
    </div>
)
}

export default Navbar