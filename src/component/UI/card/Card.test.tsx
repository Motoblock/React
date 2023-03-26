import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import catsData from '../../../assets/data/cats';

describe('Card tests:', () => {
  beforeEach(() => {
    render(<Card {...catsData[0]} />);
  });

  it('Card mounted', () => {
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });
});
