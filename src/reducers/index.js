import { combineReducers } from 'redux';
import callsReducer from './callsReducer';

export default combineReducers({
  calls: callsReducer
});
