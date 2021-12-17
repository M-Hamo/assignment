import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'persons',
    loadChildren: () =>
      import('./components/account/person.module').then((m) => m.PersonModule),
  },
  { path: '**', redirectTo: '/persons', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
