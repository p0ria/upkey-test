import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SERVICES } from './services';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [...SERVICES]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
