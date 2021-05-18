import { AppState } from './../../state/app.state';
import { APP_FEATURE_NAME } from 'src/app/state/app.state';

export interface RootState {
    [APP_FEATURE_NAME]: AppState
}