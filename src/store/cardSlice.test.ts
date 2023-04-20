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

  it('should set pending', () => {
    const action = { type: fetchCards.pending, payload: MOCK_PROPS };
    const result = cardSlice(initialState, action);
    expect(result.isLoading).toEqual(true);
    expect(result.isError).toEqual(false);
  });

  it('should set fulfilled', () => {
    const action = { type: fetchCards.fulfilled, payload: MOCK_PROPS };
    const result = cardSlice(initialState, action);
    expect(result.isLoading).toEqual(false);
    expect(result.items.length).toBe(1);
  });

  it('should set rejected', () => {
    const action = { type: fetchCards.rejected, payload: MOCK_PROPS };
    const result = cardSlice(initialState, action);
    expect(result.isLoading).toEqual(false);
    expect(result.isError).toEqual(true);
  });
});
