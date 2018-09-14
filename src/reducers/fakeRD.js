import { FAKE_ACTION } from '../config/actionTypes';

export const defaultState = { };

function fakeRD(state = defaultState , action ) {

	switch (action.type) {

		case FAKE_ACTION: {

			return Object.assign({}, state, {
				val : action.payload
			});

		}

		default: {

			return state;

		}

	}

}

export default fakeRD;
