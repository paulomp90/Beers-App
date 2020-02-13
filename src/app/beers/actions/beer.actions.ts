import { createAction, props } from '@ngrx/store';
import { BeerModelUI, RequestBeerByIngredientModelUI } from '../models/beer.models';

export const GetBeer = createAction(
    '[Beer Page] Get Beer by ingredient',
    props<RequestBeerByIngredientModelUI>()
);

export const GetBeerSuccess = createAction(
    '[Beer Page] Get Beer by ingredient success',
    props<{ payload: BeerModelUI[]}>()
);

export const Error = createAction(
  '[Beer Page] ERROR',
  props<{ rro: string}>()
);