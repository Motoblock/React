import { configureStore, PreloadedState, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import hiderSlice from './headerSlice';
import cardSlice from './cardSlice';
import modalSlice from './modalSlice';
import formSlice from './formSlice';

const rootReducer = combineReducers({
  card: cardSlice,
  modal: modalSlice,
  form: formSlice,
  header: hiderSlice,
});

export const createAppStore = (initialState?: PreloadedState<RootState>, isServer = false) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: !isServer,
  });

  setupListeners(store.dispatch);
  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createAppStore>;
export type AppDispatch = AppStore['dispatch'];
