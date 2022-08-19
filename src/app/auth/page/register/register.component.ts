import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.interface';
import { AuthActions } from '../../state/auth.actions';
import { selectError } from '../../state/auth.selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  error$ = this.store.select(selectError());
  errorSub: Subscription | undefined;
  constructor(private store: Store,  private _snackBar: MatSnackBar) {
    this.getError();

  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.errorSub?.unsubscribe();
  }

  submit(data: User) {
    this.store.dispatch({type: AuthActions.CREATE_USER, payload: data})

  }

  getError() {
    this.errorSub = this.error$.subscribe(data => {
       if(data) {
         this._snackBar.open(data.message, "Error");
       }
     })
   }

}
