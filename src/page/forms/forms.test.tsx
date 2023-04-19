import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { Forms } from './forms';

const mockStore = configureStore([]);
const initialState = {
  form: {
    isConfirm: false,
    cards: [],
  },
};
const store = mockStore(initialState);

describe('main', () => {
  it('Renders heading', () => {
    render(
      <Provider store={store}>
        <Forms />
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Enter the cats details');
  });
});
