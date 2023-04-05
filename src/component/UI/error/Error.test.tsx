import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorMessage } from './Error';

describe('Error tests:', () => {
  const message = 'Error!!!';
  beforeEach(() => {
    render(<ErrorMessage message={message} />);
  });

  it('ErrorMessage render', () => {
    expect(screen.getByText('Error!!!'));
  });
});
