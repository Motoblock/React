import { describe, it } from 'vitest';

import { messagesErrors } from './../UI/AddCard/dataError';
import {
  validationName,
  validatePrice,
  validateSex,
  validateBreeds,
  validateCatterys,
  validateAge,
  validateOwner,
  validateImage,
} from './validation';

describe('main', () => {
  it('validation Name', () => {
    let mes = validationName('');
    expect(mes).toBe(messagesErrors[0].name?.nameValue);
    mes = validationName('12vasy');
    expect(mes).toBe(messagesErrors[0].name?.nameString);
    mes = validationName('vasyvasyvasyvasyvasyvasyvasy');
    expect(mes).toBe(messagesErrors[0].name?.nameSize);
    mes = validationName('vasy');
    expect(mes).toBe(messagesErrors[0].name?.nameUpper);
  });

  it('validation age', () => {
    let mes = validateAge('');
    expect(mes).toBe(messagesErrors[1].age?.ageValue);
    mes = validateAge(Date());
    expect(mes).toBe(messagesErrors[1].age?.ageSmall);
  });

  it('validation price', () => {
    let mes = validatePrice('0');
    expect(mes).toBe(messagesErrors[2].price?.priceValue);
    mes = validatePrice('10000000000');
    expect(mes).toBe(messagesErrors[2].price?.priceMax);
  });

  it('validation age', () => {
    const mes = validateSex(null);
    expect(mes).toBe(messagesErrors[3].sex?.sexValue);
  });

  it('validation breed', () => {
    const mes = validateBreeds('');
    expect(mes).toBe(messagesErrors[4].breed?.breedValue);
  });

  it('validation cattery', () => {
    const mes = validateCatterys('');
    expect(mes).toBe(messagesErrors[5].cattery?.catteryValue);
  });

  it('validation counts', () => {
    const mes = validateOwner('');
    expect(mes).toBe(messagesErrors[7].counts?.countsValue);
  });

  it('validation image', () => {
    const mes = validateImage(null);
    expect(mes).toBe(messagesErrors[6].image?.imageValue);
  });
});
