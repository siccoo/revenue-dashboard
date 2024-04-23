import { useQuery } from 'react-query'
import { getUser, getWallet } from '../utils';

export const useGetWallet = () => {
    const { data: walletData, isLoading: getWalletloading, error: getWalletError } = useQuery('walltet', getWallet);
    return { getWalletloading, getWalletError, walletData }
}