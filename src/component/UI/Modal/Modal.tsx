import React from 'react';

import { ICardCatProps } from './../card/types';
import { SERVER_LINK } from '../../util/variable';
import { genderImg } from './../../util/gender';
import './Modal.modules.css';
import { closeModalOne } from './../../../store/modalSlice';
import { useAppDispatch } from './../../../store/hooksRedux';
interface IPropsModel {
  props: ICardCatProps[];
}

export const Modal = ({ props }: IPropsModel) => {
  const dispatch = useAppDispatch();
  const onClose = () => {
    dispatch(closeModalOne());
  };

  return (
    <div id={`${props[0].id}`} className="modal" onClick={onClose}>
      <div className="modal_wrapper" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal_header">{props[0].name}</h2>
        <span className="modal-close" onClick={onClose}>
          {' '}
          X{' '}
        </span>

        <div className="modal_content">
          <div className="modal_foto">
            <img src={`${SERVER_LINK}/${props[0].image}`} alt="{props.name}" />
          </div>
          <div className="modal_description">
            <p>
              Возраст: {props[0].age} месяцев {genderImg(props[0].sex)}
            </p>
            <p>Порода: {props[0].breed}</p>
            <p>Питомник: {props[0].catterys}</p>
            <p>Цена: {props[0].price} ₽</p>
            <p className="field_description">{props[0].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
