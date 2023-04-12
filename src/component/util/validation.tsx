import { messagesErrors } from './../UI/AddCard/dataError';
import { datediff } from './dateFunction';
import { MAX_PRICE } from './variable';

export const validationName = (value: string | undefined) => {
  if (!value) {
    return `${messagesErrors[0].name?.nameValue}`;
  }

  if (!value.match(/^[A-Za-zА-Яа-я -]+$/)) {
    return messagesErrors[0].name?.nameString;
  }

  if (value.length == 1 || !(value.length < 25)) {
    return messagesErrors[0].name?.nameSize;
  }

  const character = value.charAt(0);
  if (character !== character.toUpperCase()) {
    return messagesErrors[0].name?.nameUpper;
  }
};

export const validatePrice = (value: string | undefined) => {
  if (Number(value) < 1) {
    return messagesErrors[2].price?.priceValue;
  }
  if (value && Number(value) > MAX_PRICE) {
    return messagesErrors[2].price?.priceMax;
  }
};

export const validateSex = (value: string | null) => {
  if (value === null) {
    return messagesErrors[3].sex?.sexValue;
  }
};

export const validateBreeds = (value: string) => {
  if (value === '') {
    return messagesErrors[4].breed?.breedValue;
  }
};

export const validateCatterys = (value: string) => {
  if (value === '') {
    return messagesErrors[5].cattery?.catteryValue;
  }
};

export const validateAge = (value: string) => {
  if (!value) {
    return messagesErrors[1].age?.ageValue;
  }

  const month = datediff(new Date(value));
  if (month <= 1) {
    return messagesErrors[1].age?.ageSmall;
  }
};

export const validateOwner = (value: string) => {
  if (!value) {
    return messagesErrors[7].counts?.countsValue;
  }
};

export const validateImage = (files: FileList | null) => {
  if (!files) {
    return messagesErrors[6].image?.imageValue;
  }
  if (files && files.length === 0) {
    return messagesErrors[6].image?.imageValue;
  }
  if (!files[0].type.includes('image')) {
    return messagesErrors[6].image?.imageFormat;
  }
};
