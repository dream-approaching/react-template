import { all } from 'redux-saga/effects';
import calculatorSaga from './calculator/sagas';

export default function* rootSaga(getState) {
  console.log('getState:', getState);
  yield all([calculatorSaga()]);
}
