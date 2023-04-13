import { configureStore } from '@reduxjs/toolkit';

import usersReducer from './users/slice';
import registerReducer from './register/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    registration: registerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
