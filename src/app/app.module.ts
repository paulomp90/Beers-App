import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { BeerGeneralComponent } from './beers/containers/general/beer-general.component';
import { BeerDetailComponent } from './beers/containers/detail/beer-detail.component';

import { BeerListComponent } from './beers/components/general/beer-list/beer-list.component';
import { BeerFormComponent } from './beers/components/general/beer-form/beer-form.component';
import { BeerInformationComponent } from './beers/components/detail/beer-information.component';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BeerEffects } from './beers/effects/beer.effects';
import { reducers } from './app.reducer';

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
        HttpClientModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({
            maxAge: 10, // Retains last x states
        }),
        EffectsModule.forRoot([BeerEffects])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
