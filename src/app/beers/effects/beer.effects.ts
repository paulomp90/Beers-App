import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { BeerService } from '../../services/beer.service';
import * as beersActions from '../actions/beer.actions';
import { RequestBeerByIngredientModelUI } from '../models/beer.models';
 
@Injectable()
export class BeerEffects {

    loadBeers$ = createEffect(() => this.actions$.pipe(
        ofType(beersActions.GetBeer),
        mergeMap((request: RequestBeerByIngredientModelUI) => this.beerService.getBeerByIngredient(request)
            .pipe(
                map(beerList => beersActions.GetBeerSuccess({payload: beerList }),
                catchError((error) => of(beersActions.Error(error)))
            ))
        )
    ));

    constructor(
        private actions$: Actions,
        private beerService: BeerService
    ) {}
}