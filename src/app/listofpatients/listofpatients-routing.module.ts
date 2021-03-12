import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListofpatientsPage } from './listofpatients.page';

const routes: Routes = [
  {
    path: '',
    component: ListofpatientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListofpatientsPageRoutingModule {}
