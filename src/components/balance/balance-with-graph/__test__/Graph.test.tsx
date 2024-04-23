import { render, screen } from '@testing-library/react';
import Graph from '../Graph';
import { TTransaction } from '../../../../types';

describe('Graph component', () => {
    const mockTransactionData: TTransaction[] = [
        {
            date: '2023-10-20',
            amount: 100,
            payment_reference: 'dsfghjkdskfjg_Strertf',
            status: 'successful', type: 'deposit',
            metadata: {
                country: 'Nigeria',
                email: 'test@gmail.com',
                name: 'test test1',
                product_name: 'Rich dad poor dad',
                quantity: 3, type: 'in progress'
            }
        },
        {
            date: '2023-10-20',
            amount: 300,
            payment_reference: 'dsfghjkdskfjg_Strertf',
            status: 'successful', type: 'deposit',
            metadata: {
                country: 'Nigeria',
                email: 'test@gmail.com',
                name: 'test test1',
                product_name: 'Rich dad poor dad',
                quantity: 3, type: 'in progress'
            }
        },
        {
            date: '2023-10-20',
            amount: 200,
            payment_reference: 'dsfghjkdskfjg_Strertf',
            status: 'successful', type: 'deposit',
            metadata: {
                country: 'Nigeria',
                email: 'test@gmail.com',
                name: 'test test1',
                product_name: 'Rich dad poor dad',
                quantity: 3, type: 'in progress'
            }
        },
        {
            date: '2023-10-20',
            amount: 250,
            payment_reference: 'dsfghjkdskfjg_Strerastf',
            status: 'pending', type: 'withdrawal',
            metadata: {
                country: 'Nigeria',
                email: 'test@gmail.com',
                name: 'kuku david',
                product_name: 'Rich dad poor dad',
                quantity: 2, type: 'in progress'
            }
        },
        // Add more mock data as needed for testing
    ];

    test('renders graph with transaction data', () => {
        render(<Graph trxData={mockTransactionData} />);

        const graphElement = screen.getByRole('img', { name: 'line' });
        expect(graphElement).toBeInTheDocument();

        // Test to check if the two texts at the bottom are visible
        const bottomTexts = screen.getAllByTestId('bottom-text'); // Assuming a test ID for the bottom texts
        expect(bottomTexts.length).toBe(2); // Check if there are exactly two bottom texts rendered

        const noDataMessage = screen.queryByText('No data available');
        expect(noDataMessage).not.toBeInTheDocument(); // Ensure no "No data available" message is displayed
    });

    test('renders "No data available" message when no transaction data is provided', () => {
        render(<Graph trxData={[]} />);

        const noDataMessage = screen.getByText('No data available');
        expect(noDataMessage).toBeInTheDocument();
    });
});
