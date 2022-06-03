import { configureStore } from '@reduxjs/toolkit';
import getDataUser from '../features/userData';

export const store = configureStore({
  reducer: {
    user : getDataUser,
  },
});
