import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';

// 配置 redux-devtool调试工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

// 配置中间件
// const middleware = [thunk];
const middleware = [thunk, logger];

const store = createStore(
  reducer /* preloadedState, */,
  composeEnhancers(applyMiddleware(...middleware))
);

export { store };
