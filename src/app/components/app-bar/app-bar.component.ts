import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectMe } from 'src/app/state/app.selectors';
import { User } from 'src/app/types/user.type';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {
  user$: Observable<Partial<User>>;

  constructor(private store: Store) {

  }

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(selectMe))
  }

}
