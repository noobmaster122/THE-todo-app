import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './compoenents/home/app.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './state/todo/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './state/todo/todo.effects';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from './compoenents/add-todo/add-todo.component';
//material ui
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { SingleTodoComponent } from './compoenents/single-todo/single-todo.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    SingleTodoComponent
  ],
  imports: [
    BrowserModule,
    //StoreModule.forRoot({}, {})
    StoreModule.forRoot({ todos: todoReducer }),
    EffectsModule.forRoot([TodoEffects]),
    HttpClientModule,
    //forms module
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
