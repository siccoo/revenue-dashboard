import TransactionsListItem from './TransactionsListItem'
import { TTransaction } from '../../../types'

interface IProps {
    data: TTransaction[] | undefined
}
const TransactionsList = ({ data }: IProps) => {
    return (
        <div className='flex flex-col gap-[40px]'>
            {
                data?.map((datum, index) => (
                    <TransactionsListItem data={datum} key={index} />
                ))
            }
        </div>
    )
}

export default TransactionsList