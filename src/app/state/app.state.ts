import { TodoState } from "./todo/todo.reducer";
import { UserState } from "./login/login.reducer";


export interface AppState{
    todos: TodoState;
    user: UserState;
}
