import { createAction, props } from '@ngrx/store';


export const StartLoading = createAction(
    '[Main] Start loading'
);

export const FinishLoading = createAction(
    '[Main] Finish loading'
);
