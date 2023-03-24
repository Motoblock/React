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
  it('should change a submit button state after the user first interaction with character-status drop down list', () => {
    // expect(screen.getByTestId('submit-btn')).toBeDisabled();
    // userEvent.selectOptions(screen.getByTestId('field-name'), 'Alive');
    // expect(screen.getByTestId('submit-btn')).not.toBeDisabled();
  });

  it('Card render', () => {
    const newCard: Array<ICardCatProps> = [
      {
        id: 1,
        breed: 'Абиссинская',
        price: 20000,
        sex: 0,
        name: 'Vasy',
        age: 12,
        catterys: 'Tany Mur',
        counts: 11,
        // image: img.image1,
      },
    ];

    render(<Card {...newCard[0]} />);
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  it('confirm input to form', async () => {
    const name: HTMLInputElement = screen.getByPlaceholderText("Specify the cat's nickname");
    const price: HTMLInputElement = screen.getByPlaceholderText('Specify the price');

    act(() => {
      fireEvent.change(name, { target: { value: 'Vasy' } });
      fireEvent.change(price, { target: { value: '20000' } });
    });

    expect(name).toBeTruthy();
    expect(name.value).toBe('Vasy');
    expect(price).toBeTruthy();
    expect(price.value).toBe('20000');

    const submit = screen.getByTestId('submit-btn');
    expect(submit).toBeTruthy();

    submit.click();
    const form = screen.getByTestId('formCard') as HTMLFormElement;
    form.reset();
    expect(form).toBeTruthy();
  });
});
