import { ICardCatProps } from '../card/types';

export interface IFormStateType {
  confirm: boolean;
  cards: ICardCatProps[];
  messages: {
    name: string;
    age: string;
    price: string;
    sex: string;
    breed: string;
    cattery: string;
    image: string;
    counts: string;
  };
}
