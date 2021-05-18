import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectMe } from 'src/app/state/app.selectors';
import { Content } from 'src/app/types/content.type';
import { actionToggleContentLike } from './../../state/app.actions';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() content: Content;
  isLiked$: Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isLiked$ = this.store.pipe(
      select(selectMe),
      map(me => me && this.content?.likes?.includes(me.id))
    )
  }

  toggleLike() {
    this.store.dispatch(actionToggleContentLike({ content: this.content }))
  }

}
