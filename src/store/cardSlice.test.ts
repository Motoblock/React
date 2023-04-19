import { it, describe, expect } from 'vitest';
import { MOCK_PROPS } from './../component/util/variable';
import cardSlice, { setSearch, fetchCards } from './cardSlice';

const initialState = {
  search: '',
  items: [],
  isLoading: false,
  isError: false,
};

describe('Card Slice', () => {
  it('should return default state', () => {
    const result = cardSlice(initialState, { type: '' });
    expect(result.items).toEqual([]);
  });

  it('should set search', () => {
    const search = 'Cats';
    const actionc = { type: setSearch.type, payload: search };
    const result = cardSlice(initialState, actionc);
    expect(result.search).toEqual(search);
  });

  it('should set rejected', () => {
    const action = { type: fetchCards.rejected, payload: MOCK_PROPS };
    const result = cardSlice(initialState, action);
    expect(result.isLoading).toEqual(false);
    expect(result.isError).toEqual(true);
    // expect(result.items).toEqual([]);
  });
});
