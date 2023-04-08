import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { CardList } from './CardList';

const mockStore = configureStore([]);
const initialState = {
  modal: {
    id: 0,
    item: [],
    isShow: false,
    isError: false,
  },
  card: {
    search: '',
    items: [],
    isLoading: false,
    isError: false,
  },
};
const store = mockStore(initialState);

describe('Cardlist', () => {
  it("Cardlist don't have data", () => {
    render(
      <Provider store={store}>
        <CardList />
      </Provider>
    );
    expect(screen.getByText('Ничего не найдено'));
    expect(initialState.card.items.length).toBe(0);
  });
});
