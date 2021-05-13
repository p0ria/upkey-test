import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { RootState } from "../modules/store/root.state";

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private store: Store<RootState>
    ) { }
}