import { createAction } from 'redux-actions';
import { Action } from 'redux-actions';
import { User } from '../../models';

// add user
export const ADD_USER = 'users/ADD_USER';
export const addUser = createAction<User>(ADD_USER);
export type AddUserAction = Action<User>;

// add pictures

// link to facebook

// edit user

// delete user
