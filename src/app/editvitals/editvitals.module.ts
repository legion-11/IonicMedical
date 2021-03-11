import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditvitalsPageRoutingModule } from './editvitals-routing.module';

import { EditvitalsPage } from './editvitals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditvitalsPageRoutingModule
  ],
  declarations: [EditvitalsPage]
})
export class EditvitalsPageModule {}
