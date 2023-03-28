import React from 'react';

import { Card } from './UI/card/Card';
import { ICardCatProps } from './UI/card/types';

export const CardList = (props: { items: ICardCatProps[] }) => {
  const { items } = props;
  if (!items.length) return null;
  return (
    <div className="cards__box">
      {items.map((el: ICardCatProps) => (
        <Card key={el.id} {...el} />
      ))}
    </div>
  );
};
