import { NgModule } from '@angular/core';

import { PersonRoutingModule } from './person-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { PersonTableComponent } from './ui/person-table/person-table.component';
import { AddEditPersonModalComponent } from './ui/add-edit-person-modal/add-edit-person-modal.component';

@NgModule({
  declarations: [PersonRoutingModule.components],
  imports: [PersonRoutingModule, SharedModule],
  providers: [],
})
export class PersonModule {}
