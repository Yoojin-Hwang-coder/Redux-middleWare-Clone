import { combineReducers } from 'redux';
import counter, { counterSaga } from './counter';
import posts, { postSaga } from './posts';
import { all } from 'redux-saga/effects';
const rootRedcuder = combineReducers({ counter, posts });

export function* rootSaga() {
  yield all(counterSaga(), postSaga());
}

export default rootRedcuder;
