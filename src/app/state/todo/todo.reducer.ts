import { createReducer, on } from "@ngrx/store";
import { Todo } from "src/app/interfaces/todo.model";
import { loadTodoFailure, loadTodoSuccess, loadTodos, updateTodo } from "./todo.actions";

export interface TodoState {
  todos: Array<Todo>;
  error: string | null;
  status: 'success' | 'pending' | 'failed' | 'loading';
}

export const initialState: TodoState = {
  todos: [],
  error: null,
  status: 'pending',
};

export const todoReducer = createReducer(
  // Supply the initial state
  initialState,
  // Trigger loading the todos
  on(loadTodos, (state: TodoState): TodoState => ({
    ...state,
    todos: [],
    status: 'loading'
  })),
    // Handle successfully loaded todos
    on(loadTodoSuccess, (state: TodoState, { todos }) => ({
      ...state,
      todos: todos,
      error: null,
      status: 'success' as 'success',
    })),
    // Handle successfully loaded todos
    on(loadTodoFailure, (state: TodoState, { error }) => ({
      ...state,
      error: error,
      status: 'failed' as 'failed',
    })),
    //updateTodo
    on(updateTodo, (state: TodoState, { payload }) => ({
      ...state,
      todos: [...state.todos, payload],
      status: 'success' as 'success',
    })),
);