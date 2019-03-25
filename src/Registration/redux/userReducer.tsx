import { User } from '../User';
import { ADD_USER, AddUserAction } from './userActions';

export type UsersState = {
  users: User[];
};

const initialState: UsersState = {
  users: [],
};

export function usersReducer(
  state: UsersState = initialState,
  action: AddUserAction,
): UsersState {
  switch (action.type) {
    case ADD_USER:
      const addUserAction = action as AddUserAction;
      return { ...state, users: [...state.users, addUserAction.payload!] };
    default:
      return state;
  }
}
