import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../../interfaces/todo.model';

@Injectable({
  providedIn: 'root'
})
export class DummyBackendService {
  private url = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  public getTodos(): Observable<Array<Todo>>{
      return this.http.get<Array<Todo>>(`${this.url}/todos`);
  }
  public addTodo(payload: Todo): Observable<any>{
    console.log("am here");
    return this.http.post(`${this.url}/todos`, payload);
  }
  public updateTodo(payload: Todo): Observable<any>{
    return this.http.patch(`${this.url}/todos/${payload.id}`, payload);
  }
}
