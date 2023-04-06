import { createSlice } from '@reduxjs/toolkit';
import { ICardCatProps } from './../component/UI/card/types';

interface ICardState {
  search: string;
  items: ICardCatProps[];
  isLoading: boolean;
  modal: ICardCatProps | null;
  isShow: boolean;
}

const initialState: ICardState = {
  search: '',
  items: [],
  isLoading: false,
  modal: null,
  isShow: false,
};

const cardSlise = createSlice({
  name: 'card',
  initialState,
  reducers: {
    handelChange(state, action) {
      console.log('handelChange', state);
      console.log(action);
    },
    handleFormSubmit(state, action) {
      console.log('handleFormSubmit states', state);
      console.log('handleFormSubmit action', action);
    },
  },
});

export const { handelChange, handleFormSubmit } = cardSlise.actions;
export default cardSlise.reducer;
