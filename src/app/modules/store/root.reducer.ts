import { routerReducer, DEFAULT_ROUTER_FEATURENAME } from '@ngrx/router-store';
import { APP_FEATURE_NAME } from "@root/app/state/app.state";
import { appReducer } from './../../state/app.reducer';

export const rootReducer = {
    [DEFAULT_ROUTER_FEATURENAME]: routerReducer,
    [APP_FEATURE_NAME]: appReducer
}