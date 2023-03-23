import { breedsData } from '../../../assets/data/breeds';
import { catterysData } from './../../../assets/data/catterys';

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
      nameValue: 'The field should not be empty',
      nameUpper: 'The name must begin with a capital letter',
      nameSize: 'The name must be at least 2 letters and no more than 25',
    },
  },
  { age: { ageValue: 'error2' } },
  { price: { priceValue: 'Specify the cost' } },
];
