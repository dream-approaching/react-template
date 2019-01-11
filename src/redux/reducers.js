import { combineReducers } from 'redux';
import news from './news/reducers';
import login from './login/reducers';

export default combineReducers({
  news,
  login,
});
