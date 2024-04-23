import { TTransaction } from "../types";

export const mockTransactionData: TTransaction[] = [
    {
        date: '2024-04-22',
        amount: 500,
        payment_reference: 'dsfghjkdskfjg_Strerastf',
        status: 'successful', type: 'withdrawal',
        metadata: {
            country: 'Nigeria',
            email: 'chilakamichael001@gmail.com',
            name: 'michael chilaka',
            product_name: '28 Oluwaleyimu Ogba',
            quantity: 5, type: 'in progress'
        }
    },
    {
        date: '2024-04-22',
        amount: 200,
        payment_reference: 'dsfghjkdskfjg_Strerastf',
        status: 'pending', type: 'withdrawal',
        metadata: {
            country: 'Nigeria',
            email: 'chilakamichael001@gmail.com',
            name: 'michael chilaka',
            product_name: '28 Oluwaleyimu Ogba',
            quantity: 2, type: 'in progress'
        }
    },
    {
        date: '2024-04-22',
        amount: 400,
        payment_reference: 'dsfghjkdskfjg_Strerastf',
        status: 'successful', type: 'withdrawal',
        metadata: {
            country: 'Nigeria',
            email: 'chilakamichael001@gmail.com',
            name: 'michael chilaka',
            product_name: '28 Oluwaleyimu Ogba',
            quantity: 1, type: 'in progress'
        }
    },
    {
        date: '2024-04-22',
        amount: 250,
        payment_reference: 'dsfghjkdskfjg_Strerastf',
        status: 'pending', type: 'withdrawal',
        metadata: {
            country: 'Nigeria',
            email: 'chilakamichael001@gmail.com',
            name: 'michael chilaka',
            product_name: '28 Oluwaleyimu Ogba',
            quantity: 2, type: 'in progress'
        }
    },
];

export const mockUserData = { email: 'chilakamichael001@gmail.com', first_name: 'michael', last_name: 'chilaka' }
export const mockWalletData = {balance: 120500, ledger_balance: 100, pending_payout: 100, total_payout: 55080, total_revenue: 175580}