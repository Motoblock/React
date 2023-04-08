import { MOCK_PROPS } from './../component/util/variable';
import modalSlice, { clickModalOne, fetchModal } from './modalSlice';

const initialState = {
  id: 0,
  item: null,
  isShow: false,
  isError: false,
};

describe('Modal Slice', () => {
  it('should return default state', () => {
    const result = modalSlice(initialState, { type: '' });
    expect(result.item).toEqual(null);
  });

  it('should set id of cards', () => {
    const id = 1;
    const action = { type: clickModalOne.type, payload: id };
    const result = modalSlice(initialState, action);
    expect(result.id).toEqual(id);
  });

  it('should set rejected', () => {
    const action = { type: fetchModal.rejected, payload: MOCK_PROPS };
    const result = modalSlice(initialState, action);
    expect(result.item).toEqual(null);
  });
});
