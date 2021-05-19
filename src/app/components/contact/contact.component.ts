import { actionSelectFriend } from './../../state/app.actions';
import { Observable } from 'rxjs';
import { User } from './../../types/user.type';
import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectSelectedFriend } from 'src/app/state/app.selectors';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { debounceTime, filter, throttleTime } from 'rxjs/operators';

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
  selectedContact$: Observable<Partial<User>>;

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.selectedContact$ = this.store.pipe(select(selectSelectedFriend));
  }

  @HostListener('click')
  onClick() {
    this.router.navigate([''], {
      relativeTo: this.route,
      queryParams: {
        friend: this.user.name
      },
      queryParamsHandling: 'merge'
    });
  }

}
