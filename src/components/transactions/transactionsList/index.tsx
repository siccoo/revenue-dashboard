import TransactionsListItem from './TransactionsListItem'
import { TTransaction } from '../../../types'

interface IProps {
    data: TTransaction[] | undefined
}
const TransactionsList = ({ data }: IProps) => {
    // for the key property here, the only item that could be unique is the payment_reference
    // but this is only present in deposits,
    // and the date given is not explicitly unique.
    // so the same date could be present on more than one item, which is a ppotential problem
    // that's why I kept the key property as index, which is not recommended
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