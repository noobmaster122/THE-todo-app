import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {Todo} from '../../interfaces/todo.model';

import { selectAllTodos, selectTodos } from 'src/app/state/todo/todo.selectors';
import { AppState } from 'src/app/state/app.state';
import { loadTodos, updateTodo } from 'src/app/state/todo/todo.actions';
import { Observable } from 'rxjs';
import { DummyBackendService } from 'src/app/services/dummy-backend/dummy-backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public allTodos$: Observable<any>;
  title = 'ngrx-implementation';

  constructor(
    private store: Store<AppState>,
    private service: DummyBackendService
    ){
    this.allTodos$ = this.store.select(selectTodos);
  }

  protected getJson(data: any): string{
    return JSON.stringify(data);
  }
  
  ngOnInit() {
    this.store.dispatch(loadTodos());
    // this.store.dispatch(updateTodo({payload: {id: 96, content : "uupdate value one"}}));
    // this.service.updateTodo({id: 96, content : "uupdate value"}).subscribe(d => console.log(d));
    this.allTodos$.subscribe(data => console.log(data));
  }
}
