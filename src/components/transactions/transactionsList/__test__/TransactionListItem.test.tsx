import React from 'react';
import { render } from '@testing-library/react';
import TransactionsListItem from '../TransactionsListItem';
import { TTransaction } from '../../../../types';

describe('TransactionsListItem Component', () => {
    const mockDepositTransaction: TTransaction = {
        payment_reference: 'dsfghjkdskfjg_Strertf',
        type: 'deposit',
        metadata: {
            country: 'Nigeria',
            email: 'test@gmail.com',
            name: 'Depositor Name',
            product_name: 'Deposit Product',
            quantity: 3, type: 'in progress'
        },
        status: 'successful',
        amount: 100.0,
        date: '2023-11-17'
    }

    const mockWithdrawalTransaction: TTransaction = {
        type: 'withdrawal',
        status: 'pending',
        amount: 50.0,
        date: '2023-11-17',
    };

    it('renders deposit transaction correctly', () => {
        const { getByText, getByAltText } = render(
            <TransactionsListItem data={mockDepositTransaction} />
        );

        expect(getByText('Deposit Product')).toBeInTheDocument();
        expect(getByAltText('call')).toBeInTheDocument();
        expect(getByText('USD 100.00')).toBeInTheDocument();
        expect(getByText('Depositor Name')).toBeInTheDocument();
        expect(getByText('Nov 17, 2023')).toBeInTheDocument();
    });

    it('renders withdrawal transaction correctly', () => {
        const { getByText, getByAltText } = render(
            <TransactionsListItem data={mockWithdrawalTransaction} />
        );

        expect(getByText('Cash Withdrawal')).toBeInTheDocument(); //expect the title on withdrawals to be Cash Withdrawal
        expect(getByAltText('call')).toBeInTheDocument();
        expect(getByText('USD 50.00')).toBeInTheDocument();
        expect(getByText('Pending')).toBeInTheDocument();
        expect(getByText('Nov 17, 2023')).toBeInTheDocument();
    });
});
