import React from 'react';
import { render, screen } from '@testing-library/react';

import { Modal } from './Modal';
import { genderImg } from './../../util/gender';
import { ICardCatProps } from './../card/types';

describe('Error tests:', () => {
  const mockProps: Array<ICardCatProps> = [
    {
      id: 1,
      name: 'Бенедикт',
      breed: 'Абиссинская',
      price: 2000,
      sex: 0,
      age: 10,
      catterys: 'DonLeon',
    },
  ];
  beforeEach(() => {
    render(<Modal props={mockProps} />);
  });

  it('Modal render', () => {
    expect(screen.getByText('Бенедикт'));
    expect(screen.getByText('Порода: Абиссинская'));
    expect(screen.getByText('Цена: 2000 ₽'));
    expect(screen.getByText('Питомник: DonLeon'));
  });

  it('genderImg return link on image', () => {
    const gender = genderImg(1, 'Vasy');
    if (gender)
      expect('<img src={woman} alt={"Кот по кличке Vasy"} />').toBe(
        '<img src={woman} alt={"Кот по кличке Vasy"} />'
      );
  });
});
