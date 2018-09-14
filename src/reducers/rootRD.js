import { combineReducers } from 'redux';
import fakeRD from './fakeRD';

const rootReducer = combineReducers({
	fake : fakeRD,
});

export default rootReducer;
