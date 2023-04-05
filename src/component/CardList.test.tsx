import { render, screen } from '@testing-library/react';
import { CardList } from './CardList';
import { ICardCatProps } from './UI/card/types';
import React from 'react';

describe('Cardlist', () => {
  it("Cardlist don't have data", () => {
    const data: ICardCatProps[] = [];
    render(<CardList items={data} />);
    expect(screen.getByText('Ничего не найдено'));
    expect(data.length).toBe(0);
  });
});
