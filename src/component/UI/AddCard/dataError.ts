export const messagesErrors = [
  {
    name: {
      nameValue: 'The field should not be empty',
      nameString: 'The name contains only letters',
      nameSize: 'The name must be at least 2 letters and no more than 25',
      nameUpper: 'The name must begin with a capital letter',
    },
  },
  { age: { ageValue: 'Specify the date of birth', ageSmall: ' At least 2 months' } },
  { price: { priceValue: 'Specify the cost', priceMax: ' The price is too high' } },
  { sex: { sexValue: 'Specify the gender ' } },
  { breed: { breedValue: 'Specify the breed' } },
  { cattery: { catteryValue: 'Specify the cattery' } },
  { image: { imageValue: 'Specify the foto', imageFormat: ' The file format is not graphic' } },
  { counts: { countsValue: ' Only owners can add information ' } },
];
