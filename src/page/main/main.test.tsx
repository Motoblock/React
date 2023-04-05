import React from 'react';
import { vi } from 'vitest';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { CardList } from './../../component/CardList';
import catsData from './../../assets/data/cats';
import { Main } from './main';

describe('main', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  it('Renders heading', () => {
    render(<Main />);
    expect(
      screen.getAllByPlaceholderText('Укажите параметр поиска (имя, породу, цену возраст)...')
    ).toBeTruthy();
    expect(screen.getByText('Find yourself a fuzzy'));
  });

  it('amount of cards in card list have length equal 50', () => {
    render(<CardList items={catsData} />);
    expect(screen.getAllByTestId('card')).toHaveLength(50);
  });
});
