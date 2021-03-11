import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOfPatientsPageRoutingModule } from './list-of-patients-routing.module';

import { ListOfPatientsPage } from './list-of-patients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListOfPatientsPageRoutingModule
  ],
  declarations: [ListOfPatientsPage]
})
export class ListOfPatientsPageModule {}
