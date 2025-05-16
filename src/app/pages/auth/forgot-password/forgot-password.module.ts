
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';

import { ForgotPasswordPage } from './forgot-password.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPasswordPageRoutingModule,
    ForgotPasswordPage,
    SharedModule
  ]
})
export class ForgotPasswordPageModule {}
