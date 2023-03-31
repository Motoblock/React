import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Page404 } from './404';

describe('main', () => {
  it('Renders heading', () => {
    render(<Page404 />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not found cats (((');
  });
});
