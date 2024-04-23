import { render, screen } from '@testing-library/react';
import AvailableBalance from '../AvailableBalance';
import { TWallet } from '../../../../types';

describe('AvailableBalance component', () => {
  test('renders available balance correctly', () => {
    const walletData: TWallet = {
      balance: 500, ledger_balance: 200, pending_payout: 300, total_payout: 500, total_revenue: 100.01
    };

    render(<AvailableBalance walletData={walletData} />);

    const availableBalanceText = screen.getByText('Available Balance');
    expect(availableBalanceText).toBeInTheDocument();

    const balanceValue = screen.getByText(walletData.balance.toString());
    expect(balanceValue).toBeInTheDocument();

    const withdrawButton = screen.getByRole('button', { name: 'Withdraw' });
    expect(withdrawButton).toBeInTheDocument();
  });
});
