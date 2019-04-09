import { combineReducers, createStore, DeepPartial, ReducersMapObject } from 'redux';
import { Action } from 'redux-actions';
import { usersReducer, UsersState } from '../Registration/redux/userReducer';

export type AppState = {
  users: UsersState;
};

const rootReducer: ReducersMapObject<AppState, Action<any>> = {
  users: usersReducer,
};

export function configureStore(preloadedState?: DeepPartial<AppState>) {
  return createStore(combineReducers(rootReducer), preloadedState);
}
