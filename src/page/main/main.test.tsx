import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardList } from './../../component/CardList';
import catsData from './../../assets/data/cats';

import { Main } from './main';

describe('main', () => {
  it('Renders heading', () => {
    render(<Main />);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Find yourself a fuzzy');
  });

  it('amount of cards in card list have length equal 50', () => {
    render(<CardList items={catsData} />);
    expect(screen.getAllByTestId('card')).toHaveLength(50);
  });
});
