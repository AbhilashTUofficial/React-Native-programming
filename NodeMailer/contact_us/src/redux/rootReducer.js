import {combineReducers} from 'redux';
import uploadDataReducer from './UploadData/uploadData-reducers';

const rootReducer = combineReducers({
  data: uploadDataReducer,
});

export default rootReducer;
