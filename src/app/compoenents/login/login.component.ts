import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DummyBackendService } from 'src/app/services/dummy-backend/dummy-backend.service';
import { AppState } from 'src/app/state/app.state';
import { connectUser, loadUser } from 'src/app/state/login/login.actions';
import { UserState } from 'src/app/state/login/login.reducer';
import { selectUserState} from 'src/app/state/login/login.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public userData$: Observable<any>;


  constructor(
    private store: Store<AppState>,
    private service: DummyBackendService){
      this.userData$ = this.store.select(selectUserState);
  }
   // input handler
   protected onSubmit(form: NgForm){
    const {value} = form;
    this.store.dispatch(connectUser({payload: {uid: 123, username: "ahmed", password: "pass"}}));
    //this.userData$.subscribe(d => console.log("am user data", d));
  }
}
