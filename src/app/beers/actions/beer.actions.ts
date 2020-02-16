import { createAction, props } from '@ngrx/store';
import { BeerModelUI, RequestBeerByIngredientModelUI, RequestBeerByIdModelUI } from '../models/beer.models';

export const GetBeerList = createAction(
    '[Beer Page] Get list of beers by ingredient',
    props<RequestBeerByIngredientModelUI>()
);

export const GetBeerListSuccess = createAction(
    '[Beer Page] Get list of beers by ingredient success',
    props<{ payload: BeerModelUI[]}>()
);

export const GetBeerDetail = createAction(
    '[Beer Page] Get beer detail',
    props<RequestBeerByIdModelUI>()
);

export const GetBeerDetailSuccess = createAction(
    '[Beer Page] Get beer detail success',
    props<{ payload: BeerModelUI}>()
);

export const Error = createAction(
  '[Beer Page] ERROR',
  props<{ rro: string}>()
);