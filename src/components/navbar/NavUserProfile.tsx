import React, { useRef } from 'react'
import Text from '../ui/text'
import { getInitials, userProfileItems } from './navUtils'
import { TUser } from '../../types'
import colors from '../../helperFunctions/colors'
import { useCloseOnclickOutside } from '../../hooks/useOutsideClickClose'

interface IProps {
    user: TUser
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}
const NavUserProfile = ({ user, setShow }: IProps) => {
    const ref = useRef(null)
    useCloseOnclickOutside({ ref, setShow })
    return (
        <div data-testid = 'user-profile' ref={ref} className='bg-[white] rounded-[20px] py-8 absolute top-[100px] right-0 w-[380px] gap-[40px] flex flex-col drop-shadow-lg'>
            <div className='flex px-8 gap-2 items-center'>
                <div
                    style={{ background: 'linear-gradient(138.98deg, #5C6670 2.33%, #131316 96.28%)', color: 'white' }}
                    className='rounded-[50%] py-1 px-2 text-xs'
                >
                    <Text
                        fontSize='14px'
                        fontWeight={600}
                        lineHeight='24px'
                        color='linear-gradient(107.68deg, #FFFFFF -6.45%, #F2F3F5 114.84%)'
                    >{getInitials(user)}</Text>
                </div>
                <div className='flex flex-col gap-1'>
                    <Text color={colors.black_300} fontSize='18px' lineHeight='24px' fontWeight={600}>{user.first_name + ' ' + user.last_name}</Text>
                    <Text color={colors.grey_400} fontSize='14px' lineHeight='16px' fontWeight={400}>{user.email}</Text>
                </div>
            </div>
            <div className='flex flex-col gap-[15px]'>
                {userProfileItems.map((item) => (
                    <div key={item.title} className='flex gap-4 hover:bg-[whitesmoke] px-8 py-3'>
                        <img className='w-[20px] h-[20px]' src={item.img} alt='img' />
                        <Text color={colors.black_300} fontSize='16px' fontWeight={600} lineHeight='18px' >{item.title}</Text>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NavUserProfile