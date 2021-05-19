import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { actionGetFeeds } from './../../state/app.actions';
import { selectFeedsIsLoading, selectFriendsIsLoading, selectMeIsLoading } from './../../state/app.selectors';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isMeLoading$: Observable<boolean>;
  isFriendsLoading$: Observable<boolean>;
  isFeedsLoading$: Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isMeLoading$ = this.store.pipe(
      select(selectMeIsLoading)
    )
    this.isFriendsLoading$ = this.store.pipe(
      select(selectFriendsIsLoading)
    )
    this.isFeedsLoading$ = this.store.pipe(
      select(selectFeedsIsLoading)
    )
  }

  showFeeds() {
    this.store.dispatch(actionGetFeeds())
  }

}
