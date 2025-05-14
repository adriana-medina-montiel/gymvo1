import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { CustomImputComponent } from 'src/app/shared/components/custom-imput/custom-imput.component';

@Component({
  standalone: true, // ✅ esta línea es clave
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule, HeaderComponent, CustomImputComponent, FormsModule, ReactiveFormsModule] // ✅ necesario para usar ion-components
})
export class AuthPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  constructor() {}

  ngOnInit() {}
}

