import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IInputProps } from './interface';
import { Search } from './Search';

describe('Test Search component', () => {
  const prop: IInputProps = { type: 'search', placeholder: 'Input some body...' };
  const testValue = 'catcatcat';
  it('renders Search component', () => {
    render(<Search {...prop} />);
    expect(screen.getByPlaceholderText(/Input some body.../i)).toBeInTheDocument();
  });
  it('Renders Search component with data from localStorage', async () => {
    localStorage.setItem('searchInput', testValue);
    render(<Search {...prop} />);
    expect(screen.getByDisplayValue(testValue)).toBeInTheDocument();
  });

  it('Save value from MySearch component to localstorage when unmount', async () => {
    localStorage.clear();
    const { unmount } = render(<Search {...prop} />);
    await userEvent.type(screen.getByPlaceholderText(/Input some body.../i), testValue);
    unmount();
    render(<Search {...prop} />);
    expect(screen.getByDisplayValue(testValue)).toBeInTheDocument();
  });
});
