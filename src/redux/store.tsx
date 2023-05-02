import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import userReducer from './slices/userSlice';
import settingsReducer from './slices/settingsSLice';

export const store = configureStore({
  reducer: {
    filter,
    user: userReducer,
    settings: settingsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
