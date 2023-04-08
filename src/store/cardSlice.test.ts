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
    const action = { type: setSearch.type, payload: search };
    const result = cardSlice(initialState, action);
    expect(result.search).toEqual(search);
  });

  it('should set rejected', () => {
    const action = { type: fetchCards.rejected, payload: MOCK_PROPS };
    const result = cardSlice(initialState, action);
    expect(result.items).toEqual([]);
  });
});
