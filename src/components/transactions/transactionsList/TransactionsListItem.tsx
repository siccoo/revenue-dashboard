import { depositCircle, withdrawalCircle } from '../assets'
import Text from '../../ui/text'
import colors from '../../../helperFunctions/colors'
import { TTransaction } from '../../../types'
import { formatDate } from '../../../helperFunctions/formatDate'
import { capitalizeFirstLetter } from '../../../helperFunctions/capitalize'

interface IProps {
    data: TTransaction
}
const TransactionsListItem = ({ data }: IProps) => {
    const getImgToDisplay = () => {
        if (data.type === 'deposit') {
            return depositCircle
        }
        return withdrawalCircle
    }
    const getTextToDisplay = () => {
        if (data.type === 'deposit') {
            return <Text color={colors.grey_400} fontSize='14px' lineHeight='16px' fontWeight={500}>{data?.metadata?.name}</Text>
        } else {
            if (data.status === 'successful') {
                return <Text color={colors.green_400} fontSize='14px' lineHeight='16px' fontWeight={500}>{capitalizeFirstLetter(data?.status)}</Text>
            }else{
                return <Text color={colors.yellow_400} fontSize='14px' lineHeight='16px' fontWeight={500}>{capitalizeFirstLetter(data?.status)}</Text>
            }
        }

    }
    return (
        <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
                <img src={getImgToDisplay()} alt='call' />
                <div className='flex flex-col gap-[6px]'>
                    <Text color={colors.black_300} fontSize='16px' lineHeight='24px' fontWeight={500}>{
                        data?.metadata?.product_name ??
                        'Cash Withdrawal'
                    }</Text>
                    {getTextToDisplay()}
                </div>
            </div>

            <div className='flex flex-col gap-[6px]'>
                <Text className='text-right' color={colors.black_300} fontSize='16px' lineHeight='24px' fontWeight={700}>{`USD ${data?.amount.toFixed(2)}`}</Text>
                <Text className='text-right' color={colors.grey_400} fontSize='14px' lineHeight='16px' fontWeight={500}>{formatDate(data.date)}</Text>
            </div>
        </div>
    )
}

export default TransactionsListItem