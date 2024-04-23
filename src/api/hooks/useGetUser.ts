import { useQuery } from 'react-query'
import { getUser } from '../utils';

export const useGetUser = () => {
    const { data: userData, isLoading: getUserloading, error: getUserError } = useQuery('user', getUser);
    return { getUserloading, getUserError, userData }
}