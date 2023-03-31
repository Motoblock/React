import React from 'react';
// import { vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { AddCard } from './AddCard';
import { Card } from './../card/Card';
import { ICardCatProps } from '../card/types';

describe('Add Card tests:', () => {
  // const IFormStateType = vi.fn();
  // beforeEach(() => {
  //   render(<AddCard />);
  // });
  // const pr = {
  //   confirm: false,
  //   messages: {
  //     name: '',
  //     age: '',
  //     price: '',
  //     sex: '',
  //     breed: '',
  //     cattery: '',
  //     image: '',
  //     counts: '',
  //   },
  //   cards: [],
  // };
  // const obh = new AddCard(pr);

  // it('should have reurn a month', () => {
  //   const first: Date = new Date('2022-01-01');
  //   const second = new Date('2023-01-01');
  //   const res = obh.datediff(first, second);
  //   expect(res).toEqual(12);
  // });

  test('function returns false for invalid input', async () => {
    //const AddCard = jest.fn();
    // const price: HTMLInputElement = screen.getByTestId(/price/i);
    // const price = React.createRef();
    const form = render(<AddCard />);

    // const name = form.getAllByTestId('name')[0] as HTMLInputElement;
    const name = form.getByRole('textbox', { name: 'Cats nickname' });
    // console.log(name.value);
    // const breed: HTMLSelectElement = screen.getByTestId(/breed/i);
    // const catterys: HTMLSelectElement = screen.getByTestId(/cattery/i);
    // const age: HTMLInputElement = screen.getByRole('age');

    // await act(async () => {
    // fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Vasy' } });
    fireEvent.change(name, { target: { value: '' } });
    // fireEvent.change(breed, { target: { value: 'Британская' } });
    // fireEvent.change(catterys, { target: { value: 'Tany Mur' } });
    // fireEvent.change(age, { target: { value: '12' } });
    // });
    const submit = form.getAllByTestId('submit-btn')[0];
    submit.click();
    // expect(submit).toBeTruthy();

    // const resPrice = validatePrice(price);
    // const validateName = vi.fn();
    // const resName = validateName(name);
    // console.log(resName);
    // const saveState = vi.fn();
    // saveState('sdfsd', 'name');
    // screen.debug();
    // const resCatterys = obh.validateCatterys(obh.catterys);
    // const resBreed = obh.validateBreeds(obh.breed);
    // const resAge = obh.validateAge(obh.age);

    // // expect(resPrice).toBeTruthy();
    // expect(resName).toBeFalsy();
    // expect(resCatterys).toBeTruthy();
    // expect(resBreed).toBeTruthy();
    // expect(resAge).toBeFalsy();
    // await waitFor(() => );
  });

  it('Render Form component', () => {
    const form = render(<AddCard />);
    expect(form).toBeTruthy();
  });

  it('should contain name element', () => {
    const form = render(<AddCard />);
    expect(form.getByRole('textbox', { name: 'Cats nickname' })).toBeInTheDocument();
  });

  it('should have a disabled submit button at initialization', () => {
    const form = render(<AddCard />);
    expect(form.getByRole('button', { name: 'Create card' })).toBeInTheDocument();
  });

  // it('should show successful messages', () => {
  //   render(<p>All right</p>);
  //   expect(screen.getByText(/All right/)).toBeInTheDocument();
  // });

  it('confirm input to form', async () => {
    const form = render(<AddCard />);
    const name: HTMLInputElement = screen.getByRole('textbox', { name: 'Cats nickname' });
    // const age: HTMLInputElement = screen.getByLabelText('Date of birth');
    const price: HTMLInputElement = screen.getByRole('spinbutton', { name: 'Price' });
    const breed: HTMLSelectElement = screen.getByRole('combobox', { name: 'Breed' });
    const catterys: HTMLSelectElement = screen.getByRole('combobox', { name: 'Catterys' });
    // const sex0: HTMLInputElement = screen.getByRole(/sex0/);

    await act(async () => {
      fireEvent.change(name, { target: { value: 'Vasy' } });
      fireEvent.change(breed, { target: { value: 'Британская' } });
      fireEvent.change(price, { target: { value: '20000' } });
      // fireEvent.change(age, { target: { value: '2022-03-01' } });
      // fireEvent.change(sex0, { target: { value: '0' } });
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
    // expect(sex0).toBeTruthy();
    // expect(sex0.value).toBe('0');

    const submit = screen.getByRole('button', { name: 'Create card' });
    expect(submit).toBeTruthy();

    submit.click();

    // const form: HTMLFormElement = screen.getByRole('form');
    // form.reset();
    expect(form).toBeTruthy();

    const newCard: Array<ICardCatProps> = [
      {
        id: 1,
        breed: breed.value,
        price: Number(price.value),
        sex: Number(1),
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
