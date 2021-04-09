import { combineReducers } from 'redux';
import counter from './counter';
import posts from './posts';

const rootRedcuder = combineReducers({ counter, posts });

export default rootRedcuder;
