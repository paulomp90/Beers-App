import { Action, createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import * as BeerActions from '../actions/beer.actions';
import { BeerModelUI } from '../models/beer.models';


export interface IBeerState {
    beerDetail: BeerModelUI;
    beerList: BeerModelUI[];
}

export const initialState: IBeerState = {
    beerDetail: null,
    beerList: []
};


const beerReducer = createReducer(
    initialState,
    on(BeerActions.GetBeerSuccess, (state, { payload }) => ({ ...state, beerList: payload }))
);

export function reducer(state: IBeerState, action: Action) {
    return beerReducer(state, action);
}


const getBeerState = createFeatureSelector<IBeerState>('beer');

export const getBeerDetail = createSelector(getBeerState, (state: IBeerState) => state.beerDetail);
export const getBeerList = createSelector(getBeerState, (state: IBeerState) => state.beerList);