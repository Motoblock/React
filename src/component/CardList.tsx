import React from 'react';
import catsData from '../assets/data/cats';
import { Card } from './UI/card/Card';

export const CardList = () => {
  return (
    <div className="cards__box">
      {catsData.map((el) => (
        <Card key={el.id} {...el} />
      ))}
    </div>
  );
};
