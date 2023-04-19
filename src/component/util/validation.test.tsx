import React from 'react';
import { vi, expect } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

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
import { AddCard } from './../../component/UI/AddCard/AddCard';

const mockStore = configureStore([]);
const initialState = {
  form: {
    isConfirm: false,
    cards: [],
  },
};
const store = mockStore(initialState);

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
    const mes = validateAge('');
    expect(mes).toBe(messagesErrors[1].age?.ageValue);
  });

  it('validation age ', () => {
    const mes = validateAge('2023-04-04');
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

  it('validation image', async () => {
    let mes = validateImage(null);
    expect(mes).toBe(messagesErrors[6].image?.imageValue);

    const form = render(
      <Provider store={store}>
        <AddCard />
      </Provider>
    );
    const image = form.getByLabelText(/Photo of cats/) as HTMLInputElement;

    window.URL.createObjectURL = vi.fn();
    const file = window.URL.createObjectURL;

    mes = validateImage(image.files);
    expect(mes).toBe(messagesErrors[6].image?.imageValue);

    Object.defineProperty(file, 'accept', {
      value: 'text/plain',
      writable: false,
    });
    Object.defineProperty(file, 'type', {
      value: 'file',
      writable: false,
    });

    await act(async () => {
      fireEvent.change(image, { target: { files: [file] } });
    });
    const submit = screen.getByRole('button', { name: 'Create card' });
    expect(submit).toBeTruthy();

    submit.click();

    mes = validateImage(image.files);
    expect(mes).toBe(messagesErrors[6].image?.imageFormat);
  });
});
