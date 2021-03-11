import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListofcriticalpatientsPageRoutingModule } from './listofcriticalpatients-routing.module';

import { ListofcriticalpatientsPage } from './listofcriticalpatients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListofcriticalpatientsPageRoutingModule
  ],
  declarations: [ListofcriticalpatientsPage]
})
export class ListofcriticalpatientsPageModule {}
