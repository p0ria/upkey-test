import { selectFriendsIsLoading } from './../../state/app.selectors';
import { select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { actionShowFeeds } from 'src/app/state/app.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isFriendsLoading$: Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isFriendsLoading$ = this.store.pipe(
      select(selectFriendsIsLoading)
    )
  }

  showFeeds() {
    this.store.dispatch(actionShowFeeds())
  }

}
