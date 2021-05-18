import { AppEffects } from './../../state/app.effects';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule as NgrxStoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { rootReducer } from './root.reducer';

@NgModule({
  declarations: [],
  imports: [
    NgrxStoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([
      AppEffects
    ]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
        maxAge: 25,
        name: 'UpKey Test'
      }),
  ],
  exports: [
    NgrxStoreModule
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
