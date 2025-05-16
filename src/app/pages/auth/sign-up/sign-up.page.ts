
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';   // Importa IonicModule
 // Importa FormsModule, si lo usas

@Component({
  
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true, // ¡Hazlo standalone!
  imports: [CommonModule, IonicModule, FormsModule], // Importa los módulos necesarios
})
export class SignUpPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}