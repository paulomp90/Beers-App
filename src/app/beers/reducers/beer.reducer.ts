import { Action, createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import * as BeerActions from '../actions/beer.actions';
import { BeerModelUI } from '../models/beer.models';


export interface IBeerState {
    beerDetail: BeerModelUI;
    beerList: BeerModelUI[];
    lastSearchTerm: string;
}

export const initialState: IBeerState = {
    beerDetail: null,
    beerList: [],
    lastSearchTerm: ''
};


const beerReducer = createReducer(
    initialState,
    on(BeerActions.GetBeerListSuccess, (state, { payload }) => ({ ...state, beerList: payload })),
    on(BeerActions.GetBeerDetailSuccess, (state, { payload }) => ({ ...state, beerDetail: payload })),
    on(BeerActions.GetBeerList, (state, { Ingredient }) => ({ ...state, lastSearchTerm: Ingredient }))
);

export function reducer(state: IBeerState, action: Action) {
    return beerReducer(state, action);
}


const getBeerState = createFeatureSelector<IBeerState>('beer');

export const getBeerDetail = createSelector(getBeerState, (state: IBeerState) => state.beerDetail);
export const getBeerList = createSelector(getBeerState, (state: IBeerState) => state.beerList);
export const getLastSearchTerm = createSelector(getBeerState, (state: IBeerState) => state.lastSearchTerm);