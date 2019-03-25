import { createAction } from 'redux-actions';
import { User } from '../User';

// add user

export const ADD_USER = 'users/ADD_USER';
export const addUser = createAction<User>(ADD_USER);
export type AddUserAction = ReturnType<typeof addUser>;

// add pictures

// link to facebook

// edit user

// delete user
