import Text from '../../ui/text'
import colors from '../../../helperFunctions/colors'
import { TFilter } from '../../../types'

interface IProps {
  noOfTrxs: number
  filterObj: TFilter
}
const HeaderText = ({ noOfTrxs, filterObj }: IProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <Text color={colors.black_300} fontSize='24px' fontWeight={700} lineHeight='32px'>{noOfTrxs} transactions</Text>
      <Text color={colors.grey_400} fontSize='14px' fontWeight={500} lineHeight='16px'>{
        filterObj?.days ? `Your transactions for ${filterObj?.days}` : 'Your transactions for All time'
      }</Text>
    </div>
  )
}

export default HeaderText