import { breedsData } from '../../../assets/data/breeds';
import { catterysData } from './../../../assets/data/catterys';
import { ICardCatProps } from './../card/types';

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

export const propsInput = [
  {
    name: 'name',
    type: 'text',
    placeholder: "Specify the cat's nickname",
  },
  {
    name: 'age',
    type: 'date',
    max: Date(),
  },
  {
    name: 'price',
    type: 'number',
    placeholder: 'Specify the price',
  },
  {
    name: 'image',
    type: 'file',
    accept: 'image/*',
  },
];

export const propsSelect = [
  {
    name: 'breed',
    data: breedsData,
  },
  {
    name: 'cattery',
    data: catterysData,
  },
];

export const messagesErrors = [
  {
    name: {
      nameValue: ' The field should not be empty',
      nameString: ' The name contains only letters',
      nameUpper: ' The name must begin with a capital letter',
      nameSize: ' The name must be at least 2 letters and no more than 25',
    },
  },
  { age: { ageValue: ' Specify the date of birth', ageSmall: ' At least 2 months' } },
  { price: { priceValue: ' Specify the cost', priceMax: ' The price is too high' } },
  { sex: { sexValue: ' Specify the gender ' } },
  { breed: { breedValue: ' Specify the breed' } },
  { cattery: { catteryValue: ' Specify the cattery' } },
  { image: { imageValue: ' Specify the foto', imageFormat: ' The file format is not graphic' } },
  { counts: { countsValue: ' Only owners can add information ' } },
];
