import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Main from './main';

describe('main', () => {
  it('Renders heading', () => {
    render(<Main />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home page');
  });
});
