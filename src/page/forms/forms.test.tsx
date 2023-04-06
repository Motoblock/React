import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Forms } from './forms';

describe('main', () => {
  it('Renders heading', () => {
    render(<Forms />);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Enter the cats details');
  });
});
