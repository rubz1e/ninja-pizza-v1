import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    filter,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
