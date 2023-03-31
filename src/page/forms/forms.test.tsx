import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Forms } from './Forms';

describe('main', () => {
  it('Renders heading', () => {
    render(<Forms />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Enter the cats details');
  });
});
