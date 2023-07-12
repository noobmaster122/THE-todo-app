import { createAction, props } from '@ngrx/store';
import { TodoState } from './todo.reducer';
import { Todo } from 'src/app/interfaces/todo.model';


export const loadTodos = createAction('[Todo Page] Load Todos');
export const loadTodoSuccess = createAction(
    '[Todo Page] Load Todos success',
    props<{todos: Array<Todo>}>()
);
export const loadTodoFailure = createAction(
    '[Todo Page] Load Todos failed',
    props<{error: string}>()
);
export const updateTodo = createAction(
    '[Todo Page] update Todo',
    props<{payload: Todo}>()
);
export const addTodo = createAction(
    '[Todo Page] add Todo',
    props<{payload: Todo}>()
);


