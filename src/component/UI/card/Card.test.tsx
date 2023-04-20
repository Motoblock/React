import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { Card } from './Card';
import { MOCK_PROPS } from './../../util/variable';

const mockStore = configureStore([]);

describe('Card tests:', () => {
  const initialState = {
    card: {
      search: '',
      items: MOCK_PROPS,
      isLoading: false,
      isError: false,
    },
  };
  const store = mockStore(initialState);
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Card {...MOCK_PROPS[0]} />
      </Provider>
    );
  });

  it('Card mounted', () => {
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });
});
