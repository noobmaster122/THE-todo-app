import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { UserState } from './login.reducer';

export const selectUserState = (state: AppState) => state;
// export const selectConnectedUser = createSelector(
//   selectUserState,
//   (userState: UserState) => userState.connectedUser
// );