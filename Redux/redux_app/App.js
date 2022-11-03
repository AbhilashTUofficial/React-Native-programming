import React from 'react';
import {Provider} from 'react-redux';
import Home from './src/screens/Home';
import {data} from './src/redux/dataBinding';

function App() {
  return (
    <Provider store={data}>
      <Home />
    </Provider>
  );
}

export default App;
