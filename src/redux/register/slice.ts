import { createSlice } from '@reduxjs/toolkit';
import { fetchAsyncRegister } from './fetchAsyncRegister';
import { fetchAsyncPositions } from './fetchAsyncPositions';
import { registerSliceState, responseRegister } from './types';

const initialState: registerSliceState = {
  response: {} as responseRegister,
  positions: [],
};

export const registerSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncRegister.pending, (state, action) => {});
    builder.addCase(fetchAsyncRegister.fulfilled, (state, action) => {
      console.log(action.payload);
      state.response = action.payload;
    });
    builder.addCase(fetchAsyncRegister.rejected, (state, action) => {});

    builder.addCase(fetchAsyncPositions.pending, (state, action) => {});
    builder.addCase(fetchAsyncPositions.fulfilled, (state, action) => {
      state.positions = action.payload;
    });
    builder.addCase(fetchAsyncPositions.rejected, (state, action) => {});
  },
});

export const {} = registerSlice.actions;

export default registerSlice.reducer;
