import { combineReducers } from 'redux';
import calculator from './calculator/reducers';
import global from './global/reducers';

export default combineReducers({
  calculator,
  global,
});
