import { MOCK_PROPS } from './../component/util/variable';
import formSlice, { addNewCard, confirm } from './formSlice';

const initialState = {
  isConfirm: false,
  cards: [],
};

describe('Forms Slice', () => {
  it('should return default state', () => {
    const result = formSlice(initialState, { type: '' });
    expect(result.cards).toEqual([]);
    expect(result.isConfirm).toEqual(false);
  });

  it('should set forms new card', () => {
    const action = { type: addNewCard.type, payload: MOCK_PROPS };
    const result = formSlice(initialState, action);
    expect(result.cards.length).toEqual(1);
  });
});
