import { useQuery } from "react-query";
import { getTransactions } from "../utils";

export const useGetTransactions = () => {
  const {
    data: trxData,
    isLoading: getTrxloading,
    error: getTrxError,
  } = useQuery("transactions", getTransactions);
  return { getTrxloading, getTrxError, trxData };
};
