import React from 'react';
import stCard from './../card/card.module.css';

export interface CardCatProps {
  id: number;
  breed: string;
  price: number;
  discont: number;
  sex: number;
  name: string;
  color: number[];
  colorOption: string;
  age: number;
  raiting: number;
  counts: number;
  catterys: string;
  description: string;
}

const Card = (props: CardCatProps) => {
  return (
    <div className={stCard.cards__card}>
      <div className={stCard.card__text}>
        <div className={stCard.card__age}>{props.age}</div>
        <div className={stCard.card__name}>{props.name}</div>
        <div className={stCard.card__breed}>{props.breed}</div>
        <div className={stCard.card__cattery}>{props.catterys}</div>
        <div className={stCard.card__price}>{props.price}</div>
        <div className={stCard.card__rating}>{props.raiting}</div>
      </div>
    </div>
  );
};

export default Card;
