import { combineReducers, createStore, DeepPartial, ReducersMapObject } from 'redux';
import { usersReducer, UsersState } from '../Registration/redux/userReducer';

export type AppState = {
  users: UsersState;
};

const rootReducer: ReducersMapObject<AppState> = {
  users: usersReducer,
};

export function configureStore(preloadedState?: DeepPartial<AppState>) {
  return createStore(combineReducers(rootReducer), preloadedState);
}
