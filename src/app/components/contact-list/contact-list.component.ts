import { selectFriends } from './../../state/app.selectors';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/types/user.type';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts$: Observable<Partial<User>[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.contacts$ = this.store.pipe(select(selectFriends));
  }

}
