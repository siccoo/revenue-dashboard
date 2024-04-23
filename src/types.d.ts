export type TUser = {
  email: string;
  first_name: string;
  last_name: string;
};

export type TNavMenu = {
    name: 'Home' | 'Analytics' | 'Revenue' | 'CRM' | 'Apps'
    image: string
}

export type TProfileItem = {
    title: 'Settings' | 'Purchase History' | 'Refer and Earn' |'Integrations' |'Report Bug' |'Switch Account' | 'Logout'
    img: string
}

export type TType = 'withdrawal' | 'deposit'
export type TStatus = 'successful' | 'pending' | 'failed'
export type TTransaction = {
    amount: number,
    date: string,
    type: TType,
    status: TStatus,
    payment_reference?: string,
    metadata?: TMetadata
}

export type TFilter = {
    days: 'Last 7 days' | 'Today' | 'This month' | 'Last 3 months' | ''
    startDate: string
    endDate: string
    status: string[]
    type: string[]
}
