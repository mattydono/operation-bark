import { User } from '../../models';
import { ADD_USER, AddUserAction } from './userActions';

export type UsersState = {
  users: Record<string, User>;
};

const initialState: UsersState = {
  users: {},
};

export function usersReducer(
  state: UsersState = initialState,
  action: AddUserAction,
): UsersState {
  switch (action.type) {
    case ADD_USER:
      const addUserPayload = (action as AddUserAction).payload!;
      return {
        ...state,
        users: {
          ...state.users,
          [addUserPayload.email]: addUserPayload,
        },
      };
    default:
      return state;
  }
}
