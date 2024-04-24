import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import NavbarMenu from '../NavbarMenu';
import UserProfile from '../UserProfile';
import { TUser } from '../../../types';

describe('NavbarMenu Component', () => {
    test('Renders nav buttons and shows AppBarDrop on click', () => {
        render(<NavbarMenu />);

        // Check if initial state renders buttons
        const revenueButton = screen.getByText('Revenue');
        expect(revenueButton).toBeInTheDocument();

        const appsButton = screen.getByText('Apps');
        expect(appsButton).toBeInTheDocument();

        // Click on the 'Apps' button to trigger AppBarDrop visibility
        fireEvent.click(appsButton);

        // Check if AppBarDrop appears after clicking 'Apps'
        const appBarDrop = screen.getByText('Manage your Link in Bio');
        expect(appBarDrop).toBeInTheDocument();

        // Click again on 'Apps' to close the AppBarDrop
        fireEvent.click(appsButton);

        // Check if AppBarDrop disappears after clicking 'Apps' again
        expect(screen.queryByTestId('Manage your Link in Bio')).toBeNull();
    });
    // test onclick outside close hook by testing it on the UserProfile component
    test('closes on click outside', () => {
        const setShow = jest.fn();
        const mockUser: TUser = {
            email: 'test@gmail.com',
            first_name: 'Amiaya',
            last_name: 'Boss'
        }
        render(<UserProfile user={mockUser} setShow={setShow} />);

        const outsideElement = document.createElement('div');
        document.body.appendChild(outsideElement);

        // UserProfile should be visible initially
        expect(screen.getByTestId('user-profile')).toBeInTheDocument();

        // Click outside the UserProfile component
        fireEvent.mouseDown(outsideElement);

        // UserProfile should disappear
        expect(setShow).toHaveBeenCalledWith(false);
    });

});
