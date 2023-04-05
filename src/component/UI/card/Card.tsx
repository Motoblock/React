import React, { useCallback, useState } from 'react';

import { Modal } from './../Modal/Modal';
import { Button } from '../button/Button';
import { getCatFetch } from './../../../api/api';
import stCard from './card.module.css';
import { ICardCatProps } from './types';
import { SERVER_LINK } from '../../util/variable';

export const Card = (props: ICardCatProps) => {
  const [isShow, setShow] = useState(false);
  const [itemsOne, setItemsOne] = useState<ICardCatProps>();

  const getData = useCallback(async (key: number) => {  
    try {
      const data = await getCatFetch('', key);
    
      setItemsOne(data);  
      setShow(true)
      console.log('data', data)
    } catch (error) {    
      setShow(false);  
    }  
  }, []);   

  const handleShowModal = (key: number) => {
    console.log(key)
    getData(key);
    
  }
  const onClose = () => {
    setShow(false);    
  }
  const path = location.pathname === '/forms' ? '' : SERVER_LINK + '/';
  return (
    <div data-testid="card" className={stCard.cards__card}>
      <div className={stCard.card__images}>
        <img
          src={`${path}${props.image}`}
          title={props.description}
          alt={`Кот по кличке ` + props.name}
        />
      </div>
      <div className={stCard.card__text}>
        <h3 className={stCard.card__name}>{props.name}</h3>
        <div className={stCard.card__breed}>{props.breed}</div>
        <div className={stCard.card__price}>{props.price} ₽</div>
      </div>
      <Button key={props.id} onClick={() => handleShowModal(props.id)}>{'Подробнее'}</Button>
      {isShow && itemsOne && <Modal props={itemsOne} onClose={onClose} />}
    </div>
  );
};
