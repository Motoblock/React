import React from 'react';

import { Card } from './UI/card/Card';
import { ICardCatProps } from './UI/card/types';
import { Modal } from './UI/Modal/Modal';
import { useAppSelector } from './../store/hooksRedux';

export const CardList = () => {
  const items = useAppSelector((state) => state.card.items);
  const { isShow, item } = useAppSelector((state) => state.modal);

  return (
    <div className="cards__box">
      {!items.length && <h2 className="notfound">Ничего не найдено</h2>}
      {isShow && item && <Modal props={item} />}
      {items.map((el: ICardCatProps) => (
        <Card key={el.id} {...el} />
      ))}
    </div>
  );
};
