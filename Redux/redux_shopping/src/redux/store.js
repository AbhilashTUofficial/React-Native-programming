import {configureStore} from '@reduxjs/toolkit';

import itemsReducer from './itemCrud/itemCrudSlice';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});
