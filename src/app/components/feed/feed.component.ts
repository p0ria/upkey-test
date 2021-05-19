import { Component, HostBinding, Input, OnChanges, OnInit, Sanitizer, SimpleChanges, HostListener } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Feed } from 'src/app/types/feed.type';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnChanges {
  @Input() feed: Feed;
  html: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.feed) {
      this.html = this.sanitizer.bypassSecurityTrustHtml(this.feed.html);
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (event.target instanceof HTMLAnchorElement === false) return;
    event.preventDefault();
    let target = <HTMLAnchorElement>event.target;
    try {
      let friend = target.href.split('=')[1];
      if (friend) {
        this.router.navigate([''], {
          queryParams: {
            friend: friend
          },
          queryParamsHandling: 'merge'
        });
      }
    } catch (error) {
    }
  }
}
