import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CustomImputComponent } from './components/custom-imput/custom-imput.component';
import { LogoComponent } from './components/logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,           // ✅ importar componentes standalone
    CustomImputComponent,
    LogoComponent
  ],
  exports: [
    HeaderComponent,
    CustomImputComponent,
    LogoComponent
  ]
})
export class SharedModule {}
