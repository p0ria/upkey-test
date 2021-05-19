import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Feed } from 'src/app/types/feed.type';
import { selectFeeds, selectFeedsIsLoading } from './../../state/app.selectors';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {
  feeds$: Observable<Partial<Feed>[]>;
  isFeedsLoading$: Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.feeds$ = this.store.pipe(
      select(selectFeeds)
    )
    this.isFeedsLoading$ = this.store.pipe(
      select(selectFeedsIsLoading)
    )
  }

}
