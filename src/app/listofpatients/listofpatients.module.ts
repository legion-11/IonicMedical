import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListofpatientsPageRoutingModule } from './listofpatients-routing.module';

import { ListofpatientsPage } from './listofpatients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListofpatientsPageRoutingModule
  ],
  declarations: [ListofpatientsPage]
})
export class ListofpatientsPageModule {}
