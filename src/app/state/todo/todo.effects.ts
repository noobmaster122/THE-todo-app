import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom, mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectAllTodos } from './todo.selectors';
import { AppState } from '../app.state';
import { addTodo, loadTodoFailure, loadTodoSuccess, loadTodos, updateTodo } from './todo.actions';
import { DummyBackendService } from 'src/app/services/dummy-backend/dummy-backend.service';
import { TodoState } from './todo.reducer';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private todoStore: Store<TodoState>,
    private todoService: DummyBackendService
  ) {}

  // Run this code when a loadTodos action is dispatched
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap(()=>
      //switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.todoService.getTodos())
          .pipe(
          // Take the returned value and return a new success action containing the todos
          map((todos) => loadTodoSuccess({ todos: todos })),
          // Or... if it errors return a new failure action containing the error
          catchError(err => of(loadTodoFailure({error: err.message})))
        )
      )
    )
  );

    // Run this code when a loadTodos action is dispatched
    updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTodo),
      switchMap(({payload, type})=>
          // Call the getTodos method, convert it to an observable
          from(this.todoService.updateTodo(payload))
            .pipe(
            // Take the returned value and return a new success action containing the todos
            map(() => loadTodos()),
            // Or... if it errors return a new failure action containing the error
            catchError(err => of(loadTodoFailure({error: err.message})))
          )
        
      )
    )
  );
  // Run this code when a loadTodos action is dispatched
    addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTodo),
      switchMap(({payload, type})=>
          // Call the getTodos method, convert it to an observable
          from(this.todoService.addTodo(payload))
            .pipe(
            // Take the returned value and return a new success action containing the todos
            map(() => loadTodos()),
            // Or... if it errors return a new failure action containing the error
            catchError(err => of(loadTodoFailure({error: err.message})))
          )
        
      )
    )
  );

}