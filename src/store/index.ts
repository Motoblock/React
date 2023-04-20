import * as toolkitRaw from '@reduxjs/toolkit';
const { configureStore } = (
  'default' in toolkitRaw ? toolkitRaw.default : toolkitRaw
) as typeof toolkitRaw;

import hiderSlice from './headerSlice';
import cardSlice from './cardSlice';
import modalSlice from './modalSlice';
import formSlice from './formSlice';

export const store = configureStore({
  reducer: {
    header: hiderSlice,
    card: cardSlice,
    modal: modalSlice,
    form: formSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
