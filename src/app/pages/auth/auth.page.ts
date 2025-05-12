import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

@Component({
  standalone: true, // ✅ esta línea es clave
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule, HeaderComponent] // ✅ necesario para usar ion-components
})
export class AuthPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}

