import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectSelectedFriendContents } from 'src/app/state/app.selectors';
import { Content } from 'src/app/types/content.type';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contents$: Observable<Partial<Content>[]>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.contents$ = this.store.pipe(select(selectSelectedFriendContents));
  }

}
