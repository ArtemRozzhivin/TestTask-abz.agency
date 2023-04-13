import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchAsyncUsers } from './fetchAsyncUsers';
import { UsersState } from './types';

const initialState: UsersState = {
  users: [],
  totalPages: null,
  totalUsers: null,
  page: 1,
  isHaveUsers: true,
};

const checkIfAllUsersReceived = (users: number, totalUsers: number) => {
  return totalUsers === users ? false : true;
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncUsers.pending, (state, action) => {});
    builder.addCase(fetchAsyncUsers.fulfilled, (state, action) => {
      state.users = [...state.users, ...action.payload.users];
      state.totalPages = action.payload.totalPages;
      state.totalUsers = action.payload.totalUsers;
      state.page = state.page + 1;

      state.isHaveUsers = checkIfAllUsersReceived(state.users.length, action.payload.totalUsers);
    });
    builder.addCase(fetchAsyncUsers.rejected, (state, action) => {
      console.log(action.error);
      console.log(action.payload);
    });
  },
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;
