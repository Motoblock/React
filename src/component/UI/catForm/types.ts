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
    data: 'breedsData',
  },
  {
    name: 'age',
    type: 'date',
    max: Date(),
  },
];
