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

// interface ISelect {
//   name: string;
//   data: IBreedsData[];
// }

export const propsSelect = [
  {
    nameType: 'breed',
    data: breedsData,
  },
  {
    nameType: 'cattery',
    data: catterysData,
  },
];
