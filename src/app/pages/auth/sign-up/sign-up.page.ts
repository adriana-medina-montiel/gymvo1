
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; 
import { User } from "src/app/models/user.model";
import { FirebaseService } from "src/app/services/firebase.service";
import { UtilsService } from "src/app/services/utils.service";
import { CustomInputComponent } from 'src/app/shared/components/custom-input/custom-input.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';

// Importa IonicModule
 // Importa FormsModule, si lo usas

@Component({
  
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true, // ¡Hazlo standalone!
  imports: [CommonModule, IonicModule, FormsModule,HeaderComponent,ReactiveFormsModule,CustomInputComponent,LogoComponent], // Importa los módulos necesarios
})
export class SignUpPage implements OnInit {

  form = new FormGroup({
    uid: new FormControl(''),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      validators: [Validators.required]
    }),
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8)]
    }),
  });
    
  firebaseSvc = inject(FirebaseService)
  utilsSvc = inject(UtilsService)

  ngOnInit() {
    
  }

  async submit(){
    if(this.form.valid){
      const loading = await this.utilsSvc.loading();
      await loading.present();
      this.firebaseSvc.signUp(this.form.value as User).then( async res =>{ 
        await this.firebaseSvc.updateUser(this.form.value.name)
        let uid = res.user.uid
        this.form.controls.uid.setValue(uid)
        this.setUserInfo(uid)

       }).catch(error =>{
        console.log(error)

        this.utilsSvc.presentToast({
          message: error.message,
          duration: 2500,
          color: 'primary',
          position:'middle',
          icon:'alert-circle-outline'
        })

       }).finally(() =>{
        loading.dismiss()
       })
    }
    
  }

  async setUserInfo(uid:string){
    if(this.form.valid){
      const loading = await this.utilsSvc.loading();
      await loading.present();
      let path = `users/${uid}`
      delete this.form.value.password
      this.firebaseSvc.setDocument(path, this.form.value).then( async res =>{ 
        
        this.utilsSvc.saveLocalInStorage('user', this.form.value)
        this.utilsSvc.routerLink('/main/home')
        this.form.reset()

       }).catch(error =>{
        console.log(error)

        this.utilsSvc.presentToast({
          message: error.message,
          duration: 2500,
          color: 'primary',
          position:'middle',
          icon:'alert-circle-outline'
        })

       }).finally(() =>{
        loading.dismiss()
       })
    }
    
  }

  

}