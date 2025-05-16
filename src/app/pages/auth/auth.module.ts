
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomInputComponent } from 'src/app/shared/components/custom-input/custom-input.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
    AuthPage,
    SharedModule,
    CustomInputComponent
    
  ],
  
})
export class AuthPageModule {}