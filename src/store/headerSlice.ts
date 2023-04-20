import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = (
  'default' in toolkitRaw ? toolkitRaw.default : toolkitRaw
) as typeof toolkitRaw;

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
