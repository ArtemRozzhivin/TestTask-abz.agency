import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userDataType } from './types';

export const fetchAsyncRegister = createAsyncThunk(
  'registration/fetchAsyncRegisterStatus',
  async (userData: userDataType) => {
    const token = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/token`);

    const response = await axios.post(
      'https://frontend-test-assignment-api.abz.agency/api/v1/users',
      userData,
      {
        headers: {
          Token: token.data.token,
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    return response.data;
  },
);
