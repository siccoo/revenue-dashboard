import React from 'react'
import Text from '../../ui/text'
import colors from '../../../utils/colors'
import { info } from '../assets'
import { formatNumber } from '../../../utils/formatNumber'

interface IProps {
    title: string
    amount: number | undefined
}
const BalanceListItem = ({ amount, title }: IProps) => {
    return (
        <div>
            <div className='flex justify-between'>
                <Text
                    color={colors.grey_400}
                    fontSize='14px'
                    fontWeight={500}
                    lineHeight='16px'
                >
                    {title}
                </Text>

                <img src={info} alt='info' />
            </div>
            <Text
                color={colors.black_300}
                fontSize='28px'
                fontWeight={700}
                lineHeight='38px'
            >
                {`USD ${formatNumber(amount ?? 0)}`}
            </Text>
        </div>
    )
}

export default BalanceListItem