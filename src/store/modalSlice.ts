import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'store';

import { ICardCatProps } from './../component/UI/card/types';
import { getCatOne } from './../api/api';

interface IModalState {
  id: number;
  item: ICardCatProps[] | null;
  isShow: boolean;
  isError: boolean;
}

const initialState: IModalState = {
  id: 0,
  item: null,
  isShow: false,
  isError: false,
};

export const fetchModal = createAsyncThunk(
  'modal/fetchModal',
  async function (_, { rejectWithValue, getState }) {
    const state = getState() as RootState;
    try {
      const response = await getCatOne(state.modal.id);

      return await response.json();
    } catch (err) {
      if (!err) {
        throw new Error('Server Error!');
      }
      return rejectWithValue(err);
    }
  }
);

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    clickModalOne(state, action) {
      state.id = action.payload;
    },
    closeModalOne(state) {
      state.isShow = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchModal.pending, (state) => {
      state.isShow = false;
      state.isError = false;
    });
    builder.addCase(fetchModal.fulfilled, (state, action) => {
      state.isShow = true;
      state.item = action.payload;
    });
    builder.addCase(fetchModal.rejected, (state) => {
      state.isShow = false;
      state.isError = true;
    });
  },
});

export const { clickModalOne, closeModalOne } = modalSlice.actions;
export default modalSlice.reducer;
