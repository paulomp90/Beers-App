import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiModule } from './api/api.module';

import { AuthorListComponent } from './authors/containers/list/author-list.component';
import { AuthorDetailComponent } from './authors/containers/detail/author-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorDetailComponent,
    AuthorListComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    ApiModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
