import React from 'react';

import stCard from './card.module.css';
import mail from './../../../assets/images/male-logo.png';
import woman from './../../../assets/images/woman-logo.png';
import { ICardCatProps } from './types';

function genderImg(sex: number, name: string) {
  if (sex === 1) return <img src={woman} alt={`Кот по кличке ` + name} />;
  return <img src={mail} alt={`Кот по кличке ` + name} />;
}

export const Card = (props: ICardCatProps) => {
  return (
    <div data-testid="card" className={stCard.cards__card}>
      <div className={stCard.card__images}>
        <img src={`${props.image}`} title={props.description} alt={`Кот по кличке ` + props.name} />
      </div>
      <div className={stCard.card__text}>
        <div className={stCard.card__age}>
          {props.age} месяцев {genderImg(props.sex, props.name)}
        </div>
        <h3 className={stCard.card__name}>{props.name}</h3>
        <div className={stCard.card__breed}>{props.breed}</div>
        <div className={stCard.card__cattery}>{props.catterys}</div>
        <div className={stCard.card__price}>{props.price} ₽</div>
      </div>
    </div>
  );
};
