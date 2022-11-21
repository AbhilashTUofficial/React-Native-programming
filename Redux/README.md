# Redux with and without Redux-Toolkit

<br/>

## What is Redux-Toolkit ?
Redux-Toolkit is a package that is developed to resolve redux headaches, 
by invalidating the boilerplate codes, 
and configuration setups.

## Why use Redux-Toolkit ?
It makes state management and managing reducers so much easier.
with redux-toolkit, you don't have to make complicated logic and find
the correct portion of the state and clone it and replace it with the original just because the state is immutable.
redux-toolkit allows us to mutate the so-called immutable state.

It is hard to get into the redux toolkit, but worth it.

no need to use the connect components with mapStateToProps or mapStateToDispatch functions.

you can access the data just by using the useSelector and update data by using the useDispatch method.

## How to use Redux-Toolkit ?

It has a bit of a learning curve but it is okay, look at the difference between the save simple app with redux only and redux with redux-toolkit.

### store.js

> Without toolkit
```
import {createStore, combineReducers} from 'redux';
import ItemReducer from './reducers/itemReducer';

//! Bind to reducers
const rootReducer = combineReducers({
  items: ItemReducer,
});

export const data = createStore(rootReducer);

```
> With toolkit (it should work, but some wierd reason it didn't, so i had to create the store on the app file.)
```
// import {configureStore} from '@reduxjs/toolkit';

// import itemsReducer from './itemCrud/itemCrudSlice';

// export const store = configureStore({
//   reducer: {
//     items: itemsReducer,
//   },
// });

```

### App.js
> Without toolkit
```
import React from 'react';
import {Provider} from 'react-redux';
import Home from './src/screens/Home';
import {data} from './src/redux/store';

function App() {
  return (
    <Provider store={data}>
      <Home />
    </Provider>
  );
}

export default App;

```
> With toolkit
```
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

```

### Reducers
> Without toolkit
```
import {initialItems} from '../../model/data';

export default (state = initialItems, action) => {
  switch (action.type) {
    case 'add_item':
      return addItem(state, action.payload.itemName);
    case 'removeall_item':
      return [];
    case 'remove_item':
      return removeItem(state, action.payload.index);
    default:
      return [...state];
  }
};

//! Functions

const addItem = (state, itemName) => {
  return [...state, itemName];
};

const removeItem = (state, i) => {
  state = state.filter(item => state.indexOf(item) !== i);
  return [...state];
};

```

> With toolkit
```
import {createSlice} from '@reduxjs/toolkit';
import {initialItems} from '../../model/data';

const itemCrudSlice = createSlice({
  name: 'itemCrud',
  initialState: initialItems,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      state.pop(state[action.payload]);
    },
    removeAllItems: state => {
      return [];
    },
  },
});

export const {addItem, removeItem, removeAllItems} = itemCrudSlice.actions;

export default itemCrudSlice.reducer;

```
### actions
> Without toolkit
```
export const addItem = itemName => {
  console.log(itemName);
  return {
    type: 'add_item',
    payload: {
      itemName: itemName,
    },
  };
};

export const removeallItem = () => {
  return {
    type: 'removeall_item',
  };
};

export const removeItem = i => {
  return {
    type: 'remove_item',
    payload: {
      index: i,
    },
  };
};

```
> With toolkit
```
With toolkit there is no longer a need to make the actions, 
you can do everything with the reducers.
```
### fetch and update state
> Without toolkit
```
import {addItem} from '../redux/actions/listActions';
import {connect} from 'react-redux';

const Home = ({items,addItem}) => {

  const addItemHanlder = () => {
    addItem();
  };

  return (
    <Components/>
  );
};
const mapStateToProps = state => {
  return {items: state.items};
};
const mapStateToDispatch=dispatch=>{
    addItem:()=>dispatch(addItem()),
}

export default connect(mapStateToProps,maptStateToDispatch)(Home);
```
> With toolkit
```
import {addItem} from '../redux/actions/listActions';
import {useDispatch, useSelector} from 'react-redux';

const Home = () => {

  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  const addItemHanlder = () => {
    dispatch(addItem());
  };

  return (
    <Components/>
  );
};


export default Home;

```