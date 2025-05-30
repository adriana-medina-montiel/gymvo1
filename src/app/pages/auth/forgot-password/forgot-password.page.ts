
import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { User } from "src/app/models/user.model";
import { FirebaseService } from "src/app/services/firebase.service";
import { UtilsService } from "src/app/services/utils.service";
import { CustomInputComponent } from "src/app/shared/components/custom-input/custom-input.component";
import { HeaderComponent } from "src/app/shared/components/header/header.component";
import { LogoComponent } from "src/app/shared/components/logo/logo.component"; // ✅ Necesario para componentes <ion-*>

@Component({
  standalone: true, // ✅ Este componente es standalone
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule,HeaderComponent,CustomInputComponent,LogoComponent,ReactiveFormsModule] // ✅ Importas módulos necesarios para el HTML
})
export class ForgotPasswordPage implements OnInit {
   form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
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
      this.firebaseSvc.sendRecoveryEmail(this.form.value.email).then(res =>{ 
       
        this.utilsSvc.presentToast({
          message: "correo enviado con exito",
          duration: 1500,
          color: 'primary',
          position:'middle',
          icon:'alert-circle-outline'
        });

        this.utilsSvc.routerLink('/auth')
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