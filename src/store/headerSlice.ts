import { createSlice } from '@reduxjs/toolkit';
import { menu } from './../component/util/menu';

interface ICardState {
  title: string;
}

const initialState: ICardState = {
  title: menu('/'),
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    swowHeader(state, action) {
      state.title = action.payload;
    },
  },
});

export const { swowHeader } = headerSlice.actions;
export default headerSlice.reducer;
