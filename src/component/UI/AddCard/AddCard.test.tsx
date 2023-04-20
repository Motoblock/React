import React from 'react';
import { it, describe, expect, vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { AddCard } from './AddCard';
import { Card } from './../card/Card';
import { ICardCatProps } from './../card/types';
import { datediff } from './../../util/dateFunction';
import catsData from '../../../assets/data/cats';

const mockStore = configureStore([]);
const initialState = {
  form: {
    isConfirm: false,
    cards: [],
  },
};
const store = mockStore(initialState);

describe('Add Card tests:', () => {
  it('Render Form component', () => {
    const form = render(
      <Provider store={store}>
        <AddCard />
      </Provider>
    );
    expect(form).toBeTruthy();
  });

  it('should contain name element', () => {
    const form = render(
      <Provider store={store}>
        <AddCard />
      </Provider>
    );
    expect(form.getByRole('textbox', { name: 'Cats nickname' })).toBeInTheDocument();
  });

  it('should have a disabled submit button at initialization', () => {
    const form = render(
      <Provider store={store}>
        <AddCard />
      </Provider>
    );
    expect(form.getByRole('button', { name: 'Create card' })).toBeInTheDocument();
  });

  it('confirm input to form', async () => {
    const form = render(
      <Provider store={store}>
        <AddCard />
      </Provider>
    );

    const name = form.getByRole('textbox', { name: 'Cats nickname' }) as HTMLInputElement;
    const age = form.getByLabelText('Date of birth') as HTMLInputElement;
    const price = form.getByRole('spinbutton', { name: 'Price' }) as HTMLInputElement;
    const breed = form.getByRole('combobox', { name: 'Breed' }) as HTMLSelectElement;
    const catterys = form.getByRole('combobox', { name: 'Catterys' }) as HTMLSelectElement;
    const sex = form.getByLabelText(/Gender/) as HTMLSelectElement;
    const image = form.getByLabelText(/Photo of cats/) as HTMLInputElement;
    const counts = form.getByRole('checkbox') as HTMLInputElement;

    window.URL.createObjectURL = vi.fn();
    const file = window.URL.createObjectURL;

    Object.defineProperty(file, 'type', {
      value: 'image/png',
      writable: false,
    });

    await act(async () => {
      fireEvent.change(name, { target: { value: 'Vasy' } });
      fireEvent.change(breed, { target: { value: 'Британская' } });
      fireEvent.change(price, { target: { value: '20000' } });
      fireEvent.change(age, { target: { value: '2022-03-01' } });
      fireEvent.change(sex, { target: { value: '1' } });
      fireEvent.change(catterys, { target: { value: 'Tany Mur' } });
      fireEvent.change(counts, { target: { value: true } });
      fireEvent.change(image, { target: { files: [file] } });
    });

    const month = datediff(new Date('2022-12-01'));

    expect(name).toBeTruthy();
    expect(name.value).toBe('Vasy');
    expect(price).toBeTruthy();
    expect(age).toBeTruthy();
    expect(month).toBe(4);
    expect(price.value).toBe('20000');
    expect(breed).toBeTruthy();
    expect(breed.value).toBe('Британская');
    expect(catterys).toBeTruthy();
    expect(catterys.value).toBe('Tany Mur');
    expect(sex).toBeTruthy();
    expect(sex.value).toBe('1');
    expect(counts).toBeTruthy();
    expect(image.files![0]).toStrictEqual(file);

    const submit = screen.getByRole('button', { name: 'Create card' });
    expect(submit).toBeTruthy();

    submit.click();
    expect(form).toBeTruthy();

    const newCard: Array<ICardCatProps> = [
      {
        id: 1,
        breed: breed.value,
        price: Number(price.value),
        sex: Number(sex.value),
        name: name.value,
        age: month,
        catterys: catterys.value,
        counts: Number(counts.value),
      },
    ];
    newCard.map((card) => {
      return (
        // eslint-disable-next-line react/jsx-key
        <Provider store={store}>
          <Card key={card.id} {...card} />
        </Provider>
      );
    });

    expect(() => {
      act(() => {
        expect(screen.getByText('Британская')).toBeInTheDocument();
        expect(newCard.length).toBe(1);
      });
    });
  });

  it('Card mounted', () => {
    render(
      <Provider store={store}>
        <Card key={1} {...catsData[0]} />
      </Provider>
    );
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });
});
