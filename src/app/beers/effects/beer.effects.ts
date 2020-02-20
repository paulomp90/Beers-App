import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap, finalize, switchMap } from 'rxjs/operators';
import { BeerService } from '../../services/beer.service';
import * as beersActions from '../actions/beer.actions';
import { RequestBeerByIngredientModelUI, RequestBeerByIdModelUI } from '../models/beer.models';
import { Store } from '@ngrx/store';
import * as fromMain from '../reducers/main.reducer';
import * as fromMainActions from '../actions/main.actions';
 
@Injectable()
export class BeerEffects {

    loadBeers$ = createEffect(() => this.actions$.pipe(
        ofType(beersActions.GetBeerList),
        tap(() => this.mainStore$.dispatch(fromMainActions.StartLoading())),
        switchMap((request: RequestBeerByIngredientModelUI) => this.beerService.getBeerByIngredient(request)
            .pipe(
                map(beerList => beersActions.GetBeerListSuccess({payload: beerList }),
                catchError((error) => of(beersActions.Error(error)))
            ))
        ),
        tap(() => this.mainStore$.dispatch(fromMainActions.FinishLoading())),
    ));

    getBeerDetail$ = createEffect(() => this.actions$.pipe(
        ofType(beersActions.GetBeerDetail),
        mergeMap((request: RequestBeerByIdModelUI) => this.beerService.getBeerById(request)
            .pipe(
                map(beerDetail => beersActions.GetBeerDetailSuccess({payload: beerDetail[0] }),
                catchError((error) => of(beersActions.Error(error)))
            ))
        )
    ));

    constructor(
        private actions$: Actions,
        private beerService: BeerService,
        private mainStore$: Store<fromMain.IMainState>,
    ) {}
}