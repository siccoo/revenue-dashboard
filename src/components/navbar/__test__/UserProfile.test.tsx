import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import UserProfile from '../UserProfile';
import { userProfileItems } from '../utils';

const mockUser = {
  first_name: 'John',
  last_name: 'Doe',
  email: 'johndoe@example.com',
  // Add any other necessary fields for your user object
};

describe('UserProfile Component', () => {
  test('Renders user profile correctly', () => {
    const setShow = jest.fn();
    render(<UserProfile user={mockUser} setShow={setShow} />);

    // Check if user profile elements are rendered correctly
    const initials = screen.getByText('JD');
    expect(initials).toBeInTheDocument();

    const fullName = screen.getByText(`${mockUser.first_name} ${mockUser.last_name}`);
    expect(fullName).toBeInTheDocument();

    const email = screen.getByText(mockUser.email);
    expect(email).toBeInTheDocument();

    // Check if the user profile items are rendered
    const items = userProfileItems; // Add expected item titles
    items.forEach((item) => {
      const itemTitle = screen.getByText(item.title);
      expect(itemTitle).toBeInTheDocument();
    });
  });

});
