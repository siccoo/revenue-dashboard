import { render, screen, fireEvent, waitFor, getByText } from '@testing-library/react';
import AppBar from '..';

window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}))

describe('AppBar Component', () => {
    test('Renders AppBar with icons', async () => {
        render(<AppBar />);

        // Check if the images are rendered and specific ones are present
        const linkInBioIcon = screen.getByAltText('Link-in-Bio');
        expect(linkInBioIcon).toBeInTheDocument();

        const storeIcon = screen.getByAltText('Store');
        expect(storeIcon).toBeInTheDocument();

        // Check if the tooltip appears on hover for 'Link-in-Bio'
        // fireEvent.mouseEnter(storeIcon);
        // await screen.findByText('Store')
        // const linkInBioTooltip = screen.getByText('Store');
        // expect(linkInBioTooltip).toBeInTheDocument();
    });
});
