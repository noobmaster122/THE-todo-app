import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/interfaces/todo.model";
import { connectUser, connectUserFailed, connectUserSuccess, disconnectUser, loadUser } from "./login.actions";

export interface UserState{
  connectedUser : User | null;
  status: 'success' | 'pending' | 'failed' | 'loading';
  error?: string; 
}

export const initialState: UserState = {
  connectedUser: null,
  status: 'loading',
};

export const loginReducer = createReducer(
  // Supply the initial state
  initialState,
  on(loadUser, (state: UserState) => ({
    ...state,
    connectedUser: null,
    status: 'loading' as 'loading',
  })),
  // Trigger loading the todos
  on(connectUser, (state: UserState, { payload }) => ({
    ...state,
    connectedUser: payload,
    status: 'success' as 'success',
  })),
  on(disconnectUser, (state: UserState, { payload }) => ({
    ...state,
    connectedUser: null,
    status: 'success' as 'success',
  })),
  on(connectUserFailed, (state: UserState, { error }) => ({
    ...state,
    connectedUser: null,
    status: 'failed' as 'failed',
    error: error
  })),
  on(connectUserSuccess, (state: UserState, { payload }) => ({
    ...state,
    connectedUser: payload,
    status: 'success' as 'success',
  })),
);