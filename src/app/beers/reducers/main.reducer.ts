import { Action, createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import * as MainActions from '../actions/main.actions';

export interface IMainState {
    loading: boolean;
}

export const initialState: IMainState = {
    loading: false
};

const mainReducer = createReducer(
    initialState,
    on(MainActions.StartLoading, (state) => ({ ...state, loading: true })),
    on(MainActions.FinishLoading, (state) => ({ ...state, loading: false }))
);

export function reducer(state: IMainState, action: Action) {
    return mainReducer(state, action);
}


const getMainState = createFeatureSelector<IMainState>('main');

export const getLoading = createSelector(getMainState, (state: IMainState) => state.loading);
