import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DummyBackendService } from 'src/app/services/dummy-backend/dummy-backend.service';
import { AppState } from 'src/app/state/app.state';
import { addTodo } from 'src/app/state/todo/todo.actions';

interface TodoAdditionPayload{
  content: string
}

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  protected formData: TodoAdditionPayload = {
    content: ''
  }

  constructor(private store: Store<AppState>, private service: DummyBackendService){

  }
  protected onSubmit(data: any){
    const { value } = data;
    this.store.dispatch(addTodo({payload: {id: this.service.getRandomInt(1000), content: value.todoContent}}));
  }
}
