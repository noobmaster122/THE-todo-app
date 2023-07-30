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
import { LoginComponent } from './compoenents/login/login.component';
//router
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './compoenents/landing-page/landing-page.component';
//security guards
import {AuthGuard} from "./services/security/security-guard";
import { loginReducer } from './state/login/login.reducer';
//
//import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import * as localForage  from 'localforage';


const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'login', component: LoginComponent},
  {path:'home', component: LandingPageComponent, canActivate: [AuthGuard]}

]


@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    SingleTodoComponent,
    LoginComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    //StoreModule.forRoot({}, {})
    StoreModule.forRoot({ todos: todoReducer, user: loginReducer }),
    
    // StoreModule.forRootWithDevtools({
    //   maxAge: 25, // Retains last 25 states
    //   logOnly: false, // Restrict extension to log-only mode
    // }, localForage),
    EffectsModule.forRoot([TodoEffects]),
    HttpClientModule,
    //forms module
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    //router
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
