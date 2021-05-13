import { AppEffects } from './../../state/app.effects';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { StoreModule as NgrxStoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { rootReducer } from './root.reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [],
  imports: [
    NgrxStoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([
      AppEffects
    ]),
    StoreRouterConnectingModule.forRoot(),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
        maxAge: 25,
        name: 'UpKey Test'
      }),
  ]
})
export class StoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: StoreModule
  ) {
    if (parentModule) {
      throw new Error('StoreModule is already loaded. Import only in AppModule');
    }
  }
}
