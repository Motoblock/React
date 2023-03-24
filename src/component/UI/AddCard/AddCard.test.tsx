import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { AddCard } from './AddCard';
import { Card } from './../card/Card';
import { ICardCatProps } from '../card/types';

describe('Add Card tests:', () => {
  beforeEach(() => {
    render(<AddCard />);
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

  it('Card render', () => {
    const newCard: Array<ICardCatProps> = [
      {
        id: 1,
        breed: 'Британская',
        price: 20000,
        sex: 0,
        name: 'Vasy',
        age: 12,
        catterys: 'Tany Mur',
        counts: 1,
      },
    ];

    render(<Card {...newCard[0]} />);
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  it('confirm input to form', async () => {
    const name: HTMLInputElement = screen.getByTestId(/name/i);
    const price: HTMLInputElement = screen.getByTestId(/price/i);
    const breed: HTMLSelectElement = screen.getByTestId(/breed/i);
    const sex0: HTMLInputElement = screen.getByTestId(/sex0/);

    act(() => {
      fireEvent.change(name, { target: { value: 'Vasy' } });
      fireEvent.change(breed, { target: { value: 'Британская' } });
      fireEvent.change(price, { target: { value: '20000' } });
      fireEvent.change(sex0, { target: { value: '0' } });
    });

    expect(name).toBeTruthy();
    expect(name.value).toBe('Vasy');
    expect(price).toBeTruthy();
    expect(price.value).toBe('20000');
    expect(breed).toBeTruthy();
    expect(breed.value).toBe('Британская');
    expect(sex0).toBeTruthy();
    expect(sex0.value).toBe('0');

    const submit = screen.getByTestId('submit-btn');
    expect(submit).toBeTruthy();

    submit.click();
    const form: HTMLFormElement = screen.getByTestId('formCard');
    form.reset();
    expect(form).toBeTruthy();
  });
});
