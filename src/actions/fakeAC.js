// @flow
import { FAKE_ACTION } from '../config/actionTypes';

export const fakeAction = (payload) => {

	return {
		type : FAKE_ACTION,
		payload
	};

};

export const fakeThunk = () => {

	return function fakeThunkCb(dispatch: reduxDispatch) {

		dispatch(fakeAction('test'));

		return fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then((res) => {

				dispatch(fakeAction('try'));

				if (res.status >= 200 && res.status < 300) {

					return dispatch(fakeAction('something'));

				}

				return Promise.reject(res);

			})
			.catch((error) => {

				dispatch(fakeAction('error'));

			});

	};

};

