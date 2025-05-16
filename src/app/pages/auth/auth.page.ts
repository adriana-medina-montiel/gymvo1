import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { CustomInputComponent } from "src/app/shared/components/custom-input/custom-input.component";
import { HeaderComponent } from "src/app/shared/components/header/header.component";
import { LogoComponent } from "src/app/shared/components/logo/logo.component";


@Component({
  standalone: true,
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterLink,
    HeaderComponent,
    CustomInputComponent,
    LogoComponent
  ]
})
export class AuthPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      validators: [Validators.required]
    })
  });
    
  constructor() {}

  ngOnInit() {
    
  }

  submit(){
    console.log(this.form.value)
  }

}