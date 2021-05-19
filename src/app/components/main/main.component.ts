import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PageType } from 'src/app/types/page.type';
import { selectPage } from './../../state/app.selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  selectedPage$: Observable<PageType>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.selectedPage$ = this.store.pipe(
      select(selectPage)
    )
  }

}
