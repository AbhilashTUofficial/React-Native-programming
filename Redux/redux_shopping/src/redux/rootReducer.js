import {combineReducers} from 'redux';

import shopReducer from './Shopping/shopping-reducers';

const rootReducer = combineReducers({
  data: shopReducer,
});

export default rootReducer;
