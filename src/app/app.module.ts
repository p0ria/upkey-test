import { TokenInterceptor } from './interceptors/token.interceptor';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSkeletonModule } from 'ngx-skeleton';
import { AppComponent } from './app.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContentListComponent } from './components/content-list/content-list.component';
import { ContentComponent } from './components/content/content.component';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MATERIAL_MODULES } from './modules/material.modules';
import { StoreModule } from './modules/store/store.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FeedListComponent } from './components/feed-list/feed-list.component';
import { FeedComponent } from './components/feed/feed.component';
import { MatButtonLoadingDirectives } from './directives/mat-button-loading.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    ContactListComponent,
    ContactComponent,
    AppBarComponent,
    ContentListComponent,
    ContentComponent,
    HomePageComponent,
    FeedListComponent,
    FeedComponent,
    MatButtonLoadingDirectives
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule,
    BrowserAnimationsModule,
    NgxSkeletonModule,
    RouterModule.forRoot([{
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    }, {
      path: 'home',
      component: HomePageComponent
    }]),
    ...MATERIAL_MODULES
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
