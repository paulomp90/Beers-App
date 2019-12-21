import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiModule } from './api/api.module';

import { BeerGeneralComponent } from './beers/containers/general/beer-general.component';
import { BeerDetailComponent } from './beers/containers/detail/beer-detail.component';

import { BeerListComponent } from './beers/components/general/beer-list/beer-list.component';
import { BeerFormComponent } from './beers/components/general/beer-form/beer-form.component';
import { BeerInformationComponent } from './beers/components/detail/beer-information.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        BeerGeneralComponent,
        BeerDetailComponent,
        BeerListComponent,
        BeerFormComponent,
        BeerInformationComponent
    ],
    imports: [
        BrowserModule,
        ClarityModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ApiModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
