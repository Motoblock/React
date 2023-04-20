import { createSlice } from '@reduxjs/toolkit';

interface ICardState {
  title: string;
}

const initialState: ICardState = {
  title: '',
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
