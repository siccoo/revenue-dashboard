import React from 'react'
import AvailableBalance from './AvailableBalance'
import Graph from './Graph'
import { TTransaction, TWallet } from '../../../types'

interface IProps {
    walletData: TWallet | undefined
    trxData: TTransaction[] | undefined
}
const BalanceWithGraph = ({ walletData, trxData}: IProps) => {
  return (
    <div className='flex flex-col min-h-[250px] gap-[60px] justify-between'>
        <AvailableBalance walletData = {walletData}/>
        <Graph trxData = {trxData}/>
    </div>
  )
}

export default BalanceWithGraph