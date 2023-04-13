import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchAsyncUsersTypeReturn } from './types';

export const fetchAsyncUsers = createAsyncThunk<fetchAsyncUsersTypeReturn, number>(
  'users/fetchAsyncUsersStatus',
  async (page: number) => {
    const { data } = await axios.get(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`,
    );

    return {
      users: data.users,
      totalPages: data.total_pages,
      totalUsers: data.total_users,
    };
  },
);
