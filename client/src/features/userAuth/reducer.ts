import { ActionType } from 'typesafe-actions';

import { User } from './models';
import * as actions from './actions';

export type UsersAction = ActionType<typeof actions>;

export type UsersState = Readonly<{
	users: User[];
}>;

export default function reducer(state: User[] = [], action: UsersAction) {
	switch (action.type) {
		case actions.REGISTER:
			return [...state, action.payload];
		case actions.LOGIN:
			return [...state, action.payload];

		default:
			return state;
	}
}