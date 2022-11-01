import {createStore, combineReducers} from 'redux';
import CountReducer from './reducers/countReducer';

//! Bind to reducers
const rootReducer = combineReducers({
  count: CountReducer,
});

export const data = createStore(rootReducer);
