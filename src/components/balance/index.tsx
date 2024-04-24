import React from 'react'
import BalanceWithGraph from './balance-with-graph'
import BalanceList from './balanceList'
import { TTransaction, TWallet } from '../../types'

interface IProps {
    walletData: TWallet | undefined
    trxData: TTransaction[] | undefined
}
const Balance = ({walletData, trxData}: IProps) => {
    return (
        <div className='flex justify-between w-full px-[6%] pt-[150px]'>
            <div className='w-[50%] sl:w-[60%]'>
                <BalanceWithGraph walletData = {walletData} trxData = {trxData}/>
            </div>
            <div className='w-[35%] max-w-[320px] min-h-[300px]'>
                <BalanceList walletData = {walletData} />
            </div>
        </div>
    )
}

export default Balance