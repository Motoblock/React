import React, { useState } from 'react';

import { Modal } from './../Modal/Modal';
import { Button } from '../button/Button';
import stCard from './card.module.css';
import { ICardCatProps } from './types';
import { SERVER_LINK } from '../../util/variable';

export const Card = (props: ICardCatProps) => {
  const [show, setShow] = useState(false);

  const imageLink = `${SERVER_LINK}/${props.image}`;
  return (
    <div data-testid="card" className={stCard.cards__card}>
      <div className={stCard.card__images}>
        <img src={imageLink} title={props.description} alt={`Кот по кличке ` + props.name} />
      </div>
      <div className={stCard.card__text}>
        <h3 className={stCard.card__name}>{props.name}</h3>
        <div className={stCard.card__breed}>{props.breed}</div>
        <div className={stCard.card__price}>{props.price} ₽</div>
      </div>
      <Button onClick={() => setShow(true)}>
        {show && <Modal {...props} />}
        {'Подробнее'}
      </Button>
    </div>
  );
};
