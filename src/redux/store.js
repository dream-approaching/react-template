import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

// 配置中间件
const middleware = [logger];

const store = createStore(
  reducer /* preloadedState, */,
  composeEnhancers(applyMiddleware(...middleware))
);

export { store };
