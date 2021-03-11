import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListofcriticalpatientsPage } from './listofcriticalpatients.page';

const routes: Routes = [
  {
    path: '',
    component: ListofcriticalpatientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListofcriticalpatientsPageRoutingModule {}
