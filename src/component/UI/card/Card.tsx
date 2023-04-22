import React from 'react';

import { Button } from '../button/Button';
import stCard from './card.module.css';
import { ICardCatProps } from './types';
import { SERVER_LINK } from '../../util/variable';
import { genderImg } from './../../util/gender';
import { useAppDispatch } from './../../../store/hooksRedux';
import { clickModalOne, fetchModal } from './../../../store/modalSlice';

export const Card = (props: ICardCatProps) => {
  const dispatch = useAppDispatch();

  const handleShowModal = (key: number) => {
    dispatch(clickModalOne(key));
    dispatch(fetchModal());
  };

  let path = '';
  let isShowField = false;
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  if (pathname === '/') {
    path = SERVER_LINK + '/';
    isShowField = false;
  } else {
    path = '';
    isShowField = true;
  }

  return (
    <div key={props.name} data-testid="card" className={stCard.cards__card}>
      <div className={stCard.card__images}>
        <img
          src={`${path}${props.image}`}
          title={props.description}
          alt={`Кот по кличке ` + props.name}
        />
      </div>
      <div className={stCard.card__text}>
        {isShowField && (
          <div className={stCard.card__age}>
            {props.age} месяцев {genderImg(Number(props.sex))}
          </div>
        )}
        <h3 className={stCard.card__name}>{props.name}</h3>
        <div className={stCard.card__breed}>{props.breed}</div>
        {isShowField && <div className={stCard.card__cattery}>{props.catterys}</div>}
        <div className={stCard.card__price}>{props.price} ₽</div>
      </div>
      {!isShowField && (
        <Button key={props.id} onClick={() => handleShowModal(props.id)}>
          {'See more...'}
        </Button>
      )}
    </div>
  );
};
