import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom, mergeMap, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { DummyBackendService } from 'src/app/services/dummy-backend/dummy-backend.service';
import { UserState } from './login.reducer';
import { connectUser, connectUserFailed, connectUserSuccess } from './login.actions';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private todoStore: Store<UserState>,
    private todoService: DummyBackendService
  ) {}

  // Run this code when a loadTodos action is dispatched
  connectUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(connectUser),
      // tap(action => console.log('am in login effects ', action)),
      switchMap(({payload})=>
        // Call the getTodos method, convert it to an observable
        from(this.todoService.loginUser(payload))
          .pipe(
          // Take the returned value and return a new success action containing the todos
          map((user) => connectUserSuccess({payload: user})),
          // Or... if it errors return a new failure action containing the error
          catchError(err => of(connectUserFailed({error: "connection failed"})))
        )
      )
    )
  );
}