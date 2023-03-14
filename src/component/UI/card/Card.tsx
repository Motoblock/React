import React from 'react';
import stCard from './../card/card.module.css';
// import * as img from './../../../assets/data/catImages';

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
  image: string;
}
class Card extends React.Component<CardCatProps, { value: string }> {
  // constructor(props: CardCatProps) {
  //   super(props);
  // }

  render() {
    const link = `${this.props.image}`;
    return (
      <div className={stCard.cards__card}>
        <div className={stCard.card__images}>
          <img src={link} alt={this.props.description} />
        </div>
        <div className={stCard.card__text}>
          <div className={stCard.card__age}>{this.props.age} месяцев</div>
          <div className={stCard.card__name}>{this.props.name}</div>
          <div className={stCard.card__breed}>{this.props.breed}</div>
          <div className={stCard.card__cattery}>{this.props.catterys}</div>
          <div className={stCard.card__price}>{this.props.price}</div>
        </div>
      </div>
    );
  }
}

export default Card;
