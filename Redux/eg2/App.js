import React from 'react';
import {Provider} from 'react-redux';
import Home from './src/screens/Home';
import {items} from './src/redux/store';
import {configureStore} from '@reduxjs/toolkit';

import itemsReducer from './src/redux/itemCrud/itemCrudSlice';
const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
