import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
  
}
