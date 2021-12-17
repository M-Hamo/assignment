import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './feature/person-list/person-list.component';
import { AddEditPersonModalComponent } from './ui/add-edit-person-modal/add-edit-person-modal.component';
import { HeaderComponent } from './ui/header/header.component';
import { PersonTableComponent } from './ui/person-table/person-table.component';

const routes: Routes = [
  {
    path: '',
    component: PersonListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonRoutingModule {
  public static components = [
    PersonListComponent,
    HeaderComponent,
    PersonTableComponent,
    AddEditPersonModalComponent,
  ];
}
