import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOfPatientsPage } from './list-of-patients.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfPatientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOfPatientsPageRoutingModule {}
