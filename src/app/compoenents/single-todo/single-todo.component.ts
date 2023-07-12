import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DummyBackendService } from 'src/app/services/dummy-backend/dummy-backend.service';
import { AppState } from 'src/app/state/app.state';
import { updateTodo } from 'src/app/state/todo/todo.actions';


@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css'],
})
export class SingleTodoComponent {

  @Input() todo: any; // Input property to receive the todo object from the parent component

  protected showBlock: boolean = true;

  constructor(private store: Store<AppState>){
    
  }

  protected onDeletTodo(){
    console.log("delete todo triggered");
  }
  protected onModifyTodo(){
    console.log("modify todo triggered");
    this.showBlock = !this.showBlock;
  }

  // input handler
  protected onUpdateTodoSubmit(form: NgForm){
    const {value} = form;
    this.store.dispatch(updateTodo({payload: {id: this.todo.id, content: value.todoUpdatedContent}}));
    this.showBlock = !this.showBlock;
  }
}
