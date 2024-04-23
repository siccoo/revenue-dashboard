import React from 'react'
import Text from '../../ui/text'
import colors from '../../../utils/colors'
import Button from '../../ui/button'
import { TWallet } from '../../../types'

interface IProps {
    walletData: TWallet | undefined
}

const AvailableBalance = ({ walletData}: IProps) => {
    return (
        <div className='flex items-end gap-[10%]'>
            <div className='flex flex-col gap-2'>
                <Text fontWeight={500} color={colors.grey_400} fontSize='14px' lineHeight='16px' >
                    Available Balance
                </Text>

                <Text fontWeight={700} color={colors.black_300} fontSize='36px' lineHeight='48px' >
                    {walletData?.balance}
                </Text>
            </div>
            <Button theme='primary' className='rounded-[30px] !px-[50px] !py-3'>
                <Text color={'#FFFFFF'} fontWeight={600} fontSize='16px' lineHeight='24px'>
                    Withdraw
                </Text>
            </Button>
        </div>
    )
}

export default AvailableBalance