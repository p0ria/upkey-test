import { actionGetMe } from './state/app.actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'upkey-test';

  constructor(private store: Store) {
    this.store.dispatch(actionGetMe());
  }
}
