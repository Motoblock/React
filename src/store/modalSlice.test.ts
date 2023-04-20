import { it, describe, expect } from 'vitest';
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
    expect(result.isShow).toEqual(false);
    expect(result.isError).toEqual(true);
  });
  it('should set pending', () => {
    const action = { type: fetchModal.pending, payload: MOCK_PROPS };
    const result = modalSlice(initialState, action);
    expect(result.isShow).toEqual(false);
    expect(result.isError).toEqual(false);
  });

  it('should set fulfilled', () => {
    const action = { type: fetchModal.fulfilled, payload: MOCK_PROPS };
    const result = modalSlice(initialState, action);
    expect(result.isShow).toEqual(true);
  });
});
