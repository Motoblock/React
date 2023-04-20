import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { Modal } from './Modal';
import { genderImg } from './../../util/gender';
import { MOCK_PROPS } from './../../util/variable';

const initialState = {
  card: {
    search: '',
    items: MOCK_PROPS,
    isLoading: false,
    isError: false,
  },
};

const mockStore = configureStore([]);
const store = mockStore(initialState);

describe('Error tests:', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Modal props={MOCK_PROPS} />
      </Provider>
    );
  });

  it('Modal render', () => {
    expect(screen.getByText('Бенедикт'));
    expect(screen.getByText('Порода: Абиссинская'));
    expect(screen.getByText('Цена: 2000 ₽'));
  });

  it('genderImg return link on image', () => {
    const gender = genderImg(1);
    if (gender) expect('<img src={woman} alt={"муж"} />').toBe('<img src={woman} alt={"муж"} />');
  });
});
