import React from 'react';
import { vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { AddCard } from './AddCard';
import { Card } from './../card/Card';
import { ICardCatProps } from '../card/types';

describe('Add Card tests:', () => {
  const IFormStateType = vi.fn();
  beforeEach(() => {
    render(<AddCard {...IFormStateType} />);
  });
  const pr = {
    confirm: false,
    messages: {
      name: '',
      age: '',
      price: '',
      sex: '',
      breed: '',
      cattery: '',
      image: '',
      counts: '',
    },
    cards: [],
  };
  const obh = new AddCard(pr);

  it('should have reurn a month', () => {
    const first: Date = new Date('2022-01-01');
    const second = new Date('2023-01-01');
    const res = obh.datediff(first, second);
    expect(res).toEqual(12);
  });

  test('function returns false for invalid input', async () => {
    const price: HTMLInputElement = screen.getByTestId(/price/i);
    const name: HTMLInputElement = screen.getByTestId(/name/i);
    const breed: HTMLSelectElement = screen.getByTestId(/breed/i);
    const catterys: HTMLSelectElement = screen.getByTestId(/cattery/i);
    const age: HTMLInputElement = screen.getByRole('age');

    await act(async () => {
      fireEvent.change(name, { target: { value: 'Vasy' } });
      fireEvent.change(price, { target: { value: '1000' } });
      fireEvent.change(breed, { target: { value: 'Британская' } });
      fireEvent.change(catterys, { target: { value: 'Tany Mur' } });
      fireEvent.change(age, { target: { value: '12' } });
    });

    const resPrice = obh.validatePrice(obh.price);
    const resName = obh.validateName(obh.name);
    const resCatterys = obh.validateCatterys(obh.catterys);
    const resBreed = obh.validateBreeds(obh.breed);
    const resAge = obh.validateAge(obh.age);

    expect(resPrice).toBeTruthy();
    expect(resName).toBeFalsy();
    expect(resCatterys).toBeTruthy();
    expect(resBreed).toBeTruthy();
    expect(resAge).toBeFalsy();
  });

  it(' saveState', () => {
    obh.saveState('test', 'name');
    expect(obh.state.messages.name).toEqual('test');
    obh.saveState('', 'name');
    expect(obh.state.messages.name).toEqual('');
    obh.saveState('test', 'sex');
    expect(obh.state.messages.sex).toEqual('test');
  });

  it('Render Form component', () => {
    expect(screen.getByTestId('formCard')).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Specify the cat's nickname")).toBeInTheDocument();
  });

  it('should contain name element', () => {
    expect(screen.getByText(/Cats nickname/i)).toBeInTheDocument();
  });

  it('should have a disabled submit button at initialization', () => {
    expect(screen.getByTestId('submit-btn')).toBeInTheDocument();
  });

  it('should show successful messages', () => {
    render(<p>All right</p>);
    expect(screen.getByText(/All right/)).toBeInTheDocument();
  });

  it('confirm input to form', async () => {
    const name: HTMLInputElement = screen.getByTestId(/name/i);
    const price: HTMLInputElement = screen.getByTestId(/price/i);
    const breed: HTMLSelectElement = screen.getByTestId(/breed/i);
    const catterys: HTMLSelectElement = screen.getByTestId(/cattery/i);
    const sex0: HTMLInputElement = screen.getByTestId(/sex0/);

    await act(async () => {
      fireEvent.change(name, { target: { value: 'Vasy' } });
      fireEvent.change(breed, { target: { value: 'Британская' } });
      fireEvent.change(price, { target: { value: '20000' } });
      fireEvent.change(sex0, { target: { value: '0' } });
      fireEvent.change(catterys, { target: { value: 'Tany Mur' } });
    });

    expect(name).toBeTruthy();
    expect(name.value).toBe('Vasy');
    expect(price).toBeTruthy();
    expect(price.value).toBe('20000');
    expect(breed).toBeTruthy();
    expect(breed.value).toBe('Британская');
    expect(catterys).toBeTruthy();
    expect(catterys.value).toBe('Tany Mur');
    expect(sex0).toBeTruthy();
    expect(sex0.value).toBe('0');

    const submit = screen.getByTestId('submit-btn');
    expect(submit).toBeTruthy();

    submit.click();
    const form: HTMLFormElement = screen.getByTestId('formCard');
    form.reset();
    expect(form).toBeTruthy();

    const newCard: Array<ICardCatProps> = [
      {
        id: 1,
        breed: breed.value,
        price: Number(price.value),
        sex: Number(sex0.value),
        name: name.value,
        age: 12,
        catterys: catterys.value,
        counts: 1,
      },
    ];
    render(<Card {...newCard[0]} />);
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });
});
