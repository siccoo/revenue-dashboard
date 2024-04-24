import React from 'react'
import BalanceListItem from './BalanceListItem'
import { TWallet } from '../../../types'


interface IProps {
    walletData: TWallet | undefined
}

const BalanceList = ({ walletData}: IProps) => {
    const balances = [
        {title: 'Ledger Balance', amount: walletData?.ledger_balance},
        {title: 'Total Payout', amount: walletData?.total_payout},
        {title: 'Total Revenue', amount: walletData?.total_revenue},
        {title: 'Pending Payout', amount: walletData?.pending_payout},

    ]
  return (
    <div className='flex flex-col h-[100%] justify-between'>
        {balances?.map((balance) => (
            <BalanceListItem amount={balance.amount} title={balance.title} key = {balance.title}/>
        ))}
    </div>
  )
}

export default BalanceList