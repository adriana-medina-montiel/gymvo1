import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { User } from "src/app/models/user.model";
import { FirebaseService } from "src/app/services/firebase.service";
import { UtilsService } from "src/app/services/utils.service";
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
    
  firebaseSvc = inject(FirebaseService)
  utilsSvc = inject(UtilsService)

  ngOnInit() {
    
  }

  async submit(){
    if(this.form.valid){
      const loading = await this.utilsSvc.loading();
      await loading.present();
      this.firebaseSvc.signIn(this.form.value as User).then(res =>{ 
       
        this.getUserInfo(res.user.uid)
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
  async getUserInfo(uid:string){
    if(this.form.valid){
      const loading = await this.utilsSvc.loading();
      await loading.present();
      let path = `users/${uid}`
      
      this.firebaseSvc.getDocument(path).then( (user: User) =>{ 
        
        this.utilsSvc.saveLocalInStorage('user', user)
        this.utilsSvc.routerLink('/main/home')
        this.form.reset()

         this.utilsSvc.presentToast({
          message: `te damos la bienvenida ${user.name}` ,
          duration: 1500,
          color: 'primary',
          position:'middle',
          icon:'person-circle-outline'
        })

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