import { TUser, TTransaction } from "../types";
import axios, { AxiosResponse } from 'axios';

const baseurl = 'https://fe-task-api.mainstack.io';

export const getUser = async (): Promise<AxiosResponse<TUser>> => {
    const res = await axios.get<TUser>(`${baseurl}/user`)
    return res
}

export const getTransactions = async (): Promise<AxiosResponse<TTransaction[]>> => {
    const res = await axios.get<TTransaction[]>(`${baseurl}/transactions`)
    return res
}