import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPatientPage } from './viewpatient.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPatientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPatientPageRoutingModule {}
