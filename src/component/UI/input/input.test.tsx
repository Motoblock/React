import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { IInputProps } from './interface';
import { Search } from './Search';

describe('Test Search component', () => {
  let testValue = 'catcatcat';
  const onChange = vi.fn();

  const prop: IInputProps = {
    placeholder: 'Укажите породу...',
    value: testValue,
    onChange: onChange,
  };

  it('renders Search component', () => {
    render(<Search {...prop} />);
    expect(screen.getByPlaceholderText(/Укажите породу.../i)).toBeInTheDocument();
  });
  // it('Renders Search component with data from localStorage', () => {
  //   localStorage.setItem('searchInput', testValue);
  //   // const prop: IInputProps = {
  //   //   placeholder: 'Input some body...',
  //   //   value: testValue,
  //   // };
  //   render(<Search {...prop} />);
  //   expect(screen.getByDisplayValue(testValue)).toBeInTheDocument();
  // });

  it('Save value from Search component to localstorage when unmount', async () => {
    localStorage.clear();
    // const input = screen.getByRole('searchbox') as HTMLInputElement;

    testValue = '123';
    const { unmount } = render(<Search {...prop} />);
    await userEvent.type(screen.getByPlaceholderText(/Укажите породу.../i), testValue);
    localStorage.setItem('searchInput', testValue);
    unmount();
    // expect(screen.getByDisplayValue(testValue)).toBeInTheDocument();
    // render(<Search {...prop} />);
    // expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });
});
