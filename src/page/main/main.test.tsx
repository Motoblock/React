/* eslint-disable prettier/prettier */
import React from 'react';
import { vi } from 'vitest';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { CardList } from './../../component/CardList';
import { MOCK_PROPS } from './../../component/util/variable';

const mockStore = configureStore([]);
const initialState = {
  card: {
    search: '',
    items: MOCK_PROPS,
    isLoading: false,
    isError: false,
  },
  modal: {
    id: 0,
    item: [],
    isShow: false,
    isError: false,
  },
};

const store = mockStore(initialState);

describe('main', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  it('amount of cards in card list have length equal 1', () => {
    render(
      <Provider store={store}>
        <CardList />
      </Provider>
    );
    expect(screen.getAllByTestId('card')).toHaveLength(1);
  });
});
