import {combineReducers} from 'redux';

import MarkListReducer from './reducer-mark-list';
const allReducers = combineReducers({
	markList:MarkListReducer
});

export default allReducers;