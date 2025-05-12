import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // ✅ Necesario para componentes <ion-*>

@Component({
  standalone: true, // ✅ Este componente es standalone
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule] // ✅ Importas módulos necesarios para el HTML
})
export class ForgotPasswordPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
