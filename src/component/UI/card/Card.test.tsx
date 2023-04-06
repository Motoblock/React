import React from 'react';
import { render, screen } from '@testing-library/react';

import { Card } from './Card';
import { ICardCatProps } from './../card/types';

describe('Card tests:', () => {
  const mockProps: Array<ICardCatProps> = [
    {
      id: 1,
      name: 'Бенедикт',
      breed: 'Абиссинская',
      price: 2000,
      sex: 0,
      age: 10,
      catterys: 'DonLeon',
    },
  ];

  beforeEach(() => {
    render(<Card {...mockProps[0]} />);
  });

  it('Card mounted', () => {
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });
});
