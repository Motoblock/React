import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { IInputProps } from './interface';
import { Search } from './Search';

describe('Test Search component', () => {
  const testValue = 'catcatcat';
  const onChange = vi.fn();

  const prop: IInputProps = {
    placeholder: 'Укажите параметр поиска (имя, породу, цену)',
    value: testValue,
    onChange: onChange,
  };

  it('renders Search component', () => {
    render(<Search {...prop} />);
    expect(
      screen.getByPlaceholderText('Укажите параметр поиска (имя, породу, цену)')
    ).toBeInTheDocument();
  });
  it('Renders Search component with data from localStorage', () => {
    localStorage.setItem('searchInput', testValue);

    render(<Search {...prop} />);
    expect(screen.getByDisplayValue(testValue)).toBeInTheDocument();
  });
});
