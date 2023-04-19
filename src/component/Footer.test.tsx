import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Footer } from './Footer';

describe('Footer', () => {
  it('Renders footer block', () => {
    render(<Footer />);
    const footer = screen.queryByText('footer');
    expect(footer).toBeNull();
  });
});
