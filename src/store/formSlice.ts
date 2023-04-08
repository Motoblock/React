import { createSlice } from '@reduxjs/toolkit';

import { ICardCatProps } from './../component/UI/card/types';

interface ICardNewState {
  isConfirm: boolean;
  cards: ICardCatProps[];
}

const initialState: ICardNewState = {
  isConfirm: false,
  cards: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addNewCard(state, action) {
      state.cards.push(action.payload);
      state.isConfirm = true;
    },
    confirm(state) {
      state.isConfirm = false;
    },
  },
});

export const { addNewCard, confirm } = formSlice.actions;
export default formSlice.reducer;
