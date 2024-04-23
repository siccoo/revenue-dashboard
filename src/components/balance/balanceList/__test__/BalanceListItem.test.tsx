import { render, screen } from '@testing-library/react';
import BalanceListItem from '../BalanceListItem';

describe('BalanceListItem Component', () => {
  test('Renders title and formatted amount', () => {
    const title = 'Balance';
    const amount = 5000;

    render(<BalanceListItem title={title} amount={amount} />);

    const titleElement = screen.getByText(title);
    const formattedAmountElement = screen.getByText('USD 5,000.00'); // Replace with the expected formatted amount

    expect(titleElement).toBeInTheDocument();
    expect(formattedAmountElement).toBeInTheDocument();
  });
});
