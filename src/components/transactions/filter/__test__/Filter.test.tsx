import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Filter from '../index';
import { TFilter } from '../../../../types';

describe('Filter Component', () => {
  it('renders without crashing', () => {
    const mockSetIsOpen = jest.fn();
    const mockSetFilterObj = jest.fn();
    const mockApplyFilters = jest.fn();
    const mockFilterObj: TFilter = {} as TFilter;

    const { getByText } = render(
      <Filter
        isOpen={true}
        setIsOpen={mockSetIsOpen}
        setFilterObj={mockSetFilterObj}
        applyFilters={mockApplyFilters}
        filterObj={mockFilterObj}
      />
    );

    expect(getByText('Filter')).toBeInTheDocument();
    expect(getByText('Clear')).toBeInTheDocument();
    expect(getByText('Apply')).toBeInTheDocument();
  });

  it('calls applyFilters when Apply button is clicked', () => {
    const mockSetIsOpen = jest.fn();
    const mockSetFilterObj = jest.fn();
    const mockApplyFilters = jest.fn();
    const mockFilterObj: TFilter = {
        type: ['Withdrawals'], days: '', endDate: '', startDate: '', status: ['']
    }; 

    const { getByText } = render(
      <Filter
        isOpen={true}
        setIsOpen={mockSetIsOpen}
        setFilterObj={mockSetFilterObj}
        applyFilters={mockApplyFilters}
        filterObj={mockFilterObj}
      />
    );

    fireEvent.click(getByText('Apply'));
    expect(mockApplyFilters).toHaveBeenCalled();
    expect(mockSetIsOpen).toHaveBeenCalledWith(false);
  });

  it('calls setFilterObj and applyFilters when Clear button is clicked', () => {
    const mockSetIsOpen = jest.fn();
    const mockSetFilterObj = jest.fn();
    const mockApplyFilters = jest.fn();
    const mockFilterObj: TFilter = {
        type: ['Withdrawals'], days: '', endDate: '', startDate: '', status: ['']
    };

    const { getByText } = render(
      <Filter
        isOpen={true}
        setIsOpen={mockSetIsOpen}
        setFilterObj={mockSetFilterObj}
        applyFilters={mockApplyFilters}
        filterObj={mockFilterObj}
      />
    );

    fireEvent.click(getByText('Clear'));
    expect(mockSetFilterObj).toHaveBeenCalledWith({});
    expect(mockApplyFilters).toHaveBeenCalledWith({});
  });
});
