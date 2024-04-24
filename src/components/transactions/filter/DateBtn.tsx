import Button from '../../ui/button'
import Text from '../../ui/text'
import colors from '../../../utils/colors'
import { TFilter } from '../../../types'

interface IProps {
    text: string
    onChange: (e: string) => void
    filterObj: TFilter
}
const DateBtn = ({ text, onChange, filterObj }: IProps) => {
    return (
        <div>
            <Button
                theme={filterObj?.days === text ? 'primary' : 'primary-tertiary'}
                className='rounded-[20px]' size='sm'
                onClick={() => { onChange(text) }}>
                <Text
                    color={filterObj?.days !== text ? colors.black_300 : 'white'}
                    fontSize='14px'
                    fontWeight={600}
                    lineHeight='16px'
                >{text}</Text>
            </Button>
        </div>
    )
}

export default DateBtn