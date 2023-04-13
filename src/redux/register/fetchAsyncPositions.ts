import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { usersPosition } from './types';

export const fetchAsyncPositions = createAsyncThunk(
  'registration/fetchAsyncPositionsStatus',
  async () => {
    const { data } = await axios.get(
      `https://frontend-test-assignment-api.abz.agency/api/v1/positions`,
    );

    return data.positions as usersPosition[];
  },
);
