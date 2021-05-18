import { actionSelectFriend } from './../../state/app.actions';
import { Observable } from 'rxjs';
import { User } from './../../types/user.type';
import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectSelectedFriend } from 'src/app/state/app.selectors';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() user: User;
  @HostBinding('class.active')
  @Input()
  isActive: boolean;

  selectedContact$: Observable<User>;

  constructor(private store: Store) {
    this.selectedContact$ = this.store.pipe(select(selectSelectedFriend));
  }

  ngOnInit(): void {
  }

  @HostListener('click')
  onClick() {
    this.store.dispatch(actionSelectFriend({ friend: this.user }));
  }

}
