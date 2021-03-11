import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPatientPageRoutingModule } from './viewpatient-routing.module';

import { ViewPatientPage } from './viewpatient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPatientPageRoutingModule
  ],
  declarations: [ViewPatientPage]
})
export class ViewPatientPageModule {}
