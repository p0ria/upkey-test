import { ActionReducerMap } from '@ngrx/store';
import { appReducer } from 'src/app/state/app.reducer';
import { APP_FEATURE_NAME } from 'src/app/state/app.state';
import { RootState } from "./root.state"

export const rootReducer: ActionReducerMap<RootState> = {
    [APP_FEATURE_NAME]: appReducer
}