import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from './modules/store/store.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MATERIAL_MODULES } from './modules/material.modules';
import { ContactComponent } from './components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { ContentListComponent } from './components/content-list/content-list.component';
import { ContentComponent } from './components/content/content.component';
import { NgxSkeletonModule } from 'ngx-skeleton';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule,
    BrowserAnimationsModule,
    NgxSkeletonModule,
    ...MATERIAL_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
