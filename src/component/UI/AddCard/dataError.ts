import { breedsData } from '../../../assets/data/breeds';
import { catterysData } from '../../../assets/data/catterys';

export const propsInput = [
  {
    name: 'name',
    label: 'name',
    type: 'text',
    placeholder: "Specify the cat's nickname",
  },
  {
    name: 'age',
    label: 'age',
    type: 'date',
    max: Date(),
    role: 'age',
  },
  {
    name: 'price',
    label: 'price',
    type: 'number',
    placeholder: 'Specify the price',
  },
  {
    name: 'image',
    label: 'image',
    type: 'file',
    accept: 'image/*',
  },
];

export const propsSelect = [
  {
    name: 'breed',
    data: breedsData,
    label: 'breed',
  },
  {
    name: 'cattery',
    data: catterysData,
    label: 'cattery',
  },
];

export const messagesErrors = [
  {
    name: {
      nameValue: 'The field should not be empty',
      nameString:
        'The name contains only letters and must be at least 2 letters and no more than 25',
      nameUpper: ' The name must begin with a capital letter',
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
