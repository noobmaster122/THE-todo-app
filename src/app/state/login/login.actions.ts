import { createAction, props } from '@ngrx/store';
import {UserState} from './login.reducer';
import { User } from 'src/app/interfaces/todo.model';

export const loadUser = createAction('[Login workflow] Load Connected User');
export const disconnectUser = createAction(
    '[Login workflow] Disconnect User',
    props<{payload: User}>()
);
export const connectUser = createAction(
    '[Login workflow] Connect User',
    props<{payload: User}>()
);
export const connectUserFailed = createAction(
    '[Login workflow] Failed user connection',
    props<{error: string}>()
);
export const connectUserSuccess = createAction(
    '[Login workflow] Failed user connection',
    props<{payload: User}>()
);



