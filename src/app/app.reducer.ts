import { ActionReducerMap } from '@ngrx/store';
import * as MainReducer from './beers/reducers/main.reducer'
import * as BeerReducer from './beers/reducers/beer.reducer'

export interface IAppState {
    main: any;
    beer: any;
}

export const reducers: ActionReducerMap<IAppState> = {
    main: MainReducer.reducer,
    beer: BeerReducer.reducer,
};