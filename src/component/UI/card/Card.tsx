import React from 'react';
import stCard from './Card.module.css';
import mail from './../../../assets/images/male-logo.png';
import woman from './../../../assets/images/woman-logo.png';
import { ICardCatProps } from './types';

export class Card extends React.Component<ICardCatProps, { value: string }> {
  render() {
    const link = `${this.props.image}`;
    let sex = (
      <img src={mail} title={this.props.description} alt={`Кот по кличке ` + this.props.name} />
    );
    if (this.props.sex == 1)
      sex = (
        <img src={woman} title={this.props.description} alt={`Кот по кличке ` + this.props.name} />
      );
    return (
      <div data-testid="card" className={stCard.cards__card}>
        <div className={stCard.card__images}>
          <img src={link} title={this.props.description} alt={`Кот по кличке ` + this.props.name} />
        </div>
        <div className={stCard.card__text}>
          <div className={stCard.card__age}>
            {this.props.age} месяцев {sex}
          </div>
          <div className={stCard.card__name}>{this.props.name}</div>
          <div className={stCard.card__breed}>{this.props.breed}</div>
          <div className={stCard.card__cattery}>{this.props.catterys}</div>
          <div className={stCard.card__price}>{this.props.price} ₽</div>
        </div>
      </div>
    );
  }
}
