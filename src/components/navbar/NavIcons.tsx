import { chat, menu, notifications, userIcon } from '../../assets'
import colors from '../../helperFunctions/colors'
import { TUser } from '../../types'
import Text from '../ui/text'
import { getInitials } from './navUtils'
import { useState } from 'react'
import NavUserProfile from './NavUserProfile'

interface IProps {
    user: TUser | undefined
}
const NavIcons = ({user}: IProps) => {
    const [show, setShow] = useState(false)
    return (
            <div className='flex gap-3 lg:gap-[30px]'>
            <img src={notifications} alt='img' />
            <img src={chat} alt='img' />

            <div className='flex gap-2 items-center p-1 rounded-[30px] cursor-pointer' onClick={()=> setShow(!show)} style={{ backgroundColor: colors.grey_50 }}>
                <div
                    style={{ background: 'linear-gradient(138.98deg, #5C6670 2.33%, #131316 96.28%)', color: 'white' }}
                    className='rounded-[50%] py-1 px-2 text-xs'
                >
                    {
                        user ? <Text 
                        fontSize='14px' 
                        fontWeight={600} 
                        lineHeight='24px' 
                        color='linear-gradient(107.68deg, #FFFFFF -6.45%, #F2F3F5 114.84%)'
                        >{getInitials(user)}</Text> :
                        <img src = {userIcon} alt = '' className='h-[25px] w-[20px]'/>
                    }
                </div>
                <img src={menu} alt='bar' />

                {
                    show && user && <NavUserProfile user={user} setShow = {setShow}/>
                }
            </div>
        </div>
    )
}

export default NavIcons