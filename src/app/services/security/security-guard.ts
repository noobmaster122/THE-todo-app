import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, firstValueFrom, take } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectUserState } from 'src/app/state/login/login.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public userData$: Observable<any>;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
    this.userData$ = this.store.select(selectUserState);
  }

  async canActivate(): Promise<boolean> {
    // If the user is not logged in, redirect them to the login page.
    //const user = await firstValueFrom(this.userData$);
    //ideally only a uid will be stored in the localstorage
    const state = JSON.parse(localStorage.getItem('__storage__') as string) || null;
    console.log("am state: ", state);
    if (!!!state?.user?.connectedUser) {
      this.router.navigate(['/login']);
      return false;
    }
    // Otherwise, allow the user to access the route.
    return true;
  }

}