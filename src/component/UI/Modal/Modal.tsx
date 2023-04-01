import React from 'react';
import { ICardCatProps } from './../card/types';
import { SERVER_LINK } from '../../util/variable';
import mail from './../../../assets/images/male-logo.png';
import woman from './../../../assets/images/woman-logo.png';
import './Modal.modules.css';

function genderImg(sex: number, name: string) {
  if (sex === 1) return <img src={mail} alt={`Кот по кличке ` + name} />;
  return <img src={woman} alt={`Кот по кличке ` + name} />;
}

export const Modal = (props: ICardCatProps) => {
  return (
    <div id={`${props.id}`} className="modal">
      <div className="modal_wrapper">
        <h2 className="modal_header">{props.name}</h2>

        <div className="modal_content">
          <div className="modal_foto">
            <img src={`${SERVER_LINK}/${props.image}`} alt="{props.name}" />
          </div>
          <div className="modal_description">
            <p>
              Age: {props.age} месяцев {genderImg(props.sex, props.name)}
            </p>
            <p>Breed: {props.breed}</p>
            <p>Catterys: {props.catterys}</p>
            <p className="field_description">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
