import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'store';

import { ICardCatProps } from './../component/UI/card/types';
import { getCatFetch } from './../api/api';

interface ICardState {
  search: string;
  items: ICardCatProps[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: ICardState = {
  search: '',
  items: [],
  isLoading: false,
  isError: false,
};

export const fetchCards = createAsyncThunk(
  'card/fetchCards',
  async function (_, { rejectWithValue, getState }) {
    const state = getState() as RootState;
    try {
      const response = await getCatFetch(`${state.card.search}`);

      return response.json();
    } catch (err) {
      if (!err) {
        throw new Error('Server Error!');
      }
      return rejectWithValue(err);
    }
  }
);

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCards.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchCards.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { setSearch } = cardSlice.actions;
export default cardSlice.reducer;
