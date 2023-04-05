import React from 'react';
import { ICardCatProps } from './../card/types';
import { SERVER_LINK } from '../../util/variable';
import mail from './../../../assets/images/male-logo.png';
import woman from './../../../assets/images/woman-logo.png';
import './Modal.modules.css';

export function genderImg(sex: number, name: string) {
  if (sex === 1) return <img src={mail} alt={`Кот по кличке ` + name} />;
  return <img src={woman} alt={`Кот по кличке ` + name} />;
}

interface IPropsModel {
  props: ICardCatProps;
  onClose?: () => void | undefined;
}

export const Modal = ({ onClose, props }: IPropsModel) => {
  return (
    <div id={`${props.id}`} className="modal" onClick={onClose}>
      <div className="modal_wrapper" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal_header">{props.name}</h2>
        <span className="modal-close" onClick={onClose}>
          {' '}
          X{' '}
        </span>

        <div className="modal_content">
          <div className="modal_foto">
            <img src={`${SERVER_LINK}/${props.image}`} alt="{props.name}" />
          </div>
          <div className="modal_description">
            <p>
              Возраст: {props.age} месяцев {genderImg(props.sex, props.name)}
            </p>
            <p>Порода: {props.breed}</p>
            <p>Питомник: {props.catterys}</p>
            <p>Цена: {props.price} ₽</p>
            <p className="field_description">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
