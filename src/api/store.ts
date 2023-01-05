import { configureStore } from '@reduxjs/toolkit';
import { banksApi } from './api.slice';

export default configureStore({
  reducer: {
    [banksApi.reducerPath]: banksApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(banksApi.middleware)
})