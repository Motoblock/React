import { configureStore } from '@reduxjs/toolkit';
import cardSlise from './cardSlice';

export default configureStore({
  reducer: {
    card: cardSlise,
  },
});
