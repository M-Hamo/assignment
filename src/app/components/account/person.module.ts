import { NgModule } from '@angular/core';

import { PersonRoutingModule } from './person-routing.module';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [PersonRoutingModule.components],
  imports: [PersonRoutingModule, SharedModule],
  providers: [],
})
export class PersonModule {}
