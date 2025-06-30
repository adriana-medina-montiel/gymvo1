import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports:[IonicModule, CommonModule, HeaderComponent]
})
export class HomePage implements OnInit {

 userName: string = '';
  membership: string = '';
  nextClass: { title: string; hour: string } | null = null;
  notifications: string[] = [];

  constructor(private firebase: FirebaseService) {}

  ngOnInit() {
    const uid = getAuth().currentUser?.uid;
    if (!uid) return;

    // Datos del usuario
    this.firebase.getDocument(`users/${uid}`).then((data: any) => {
      this.userName = data.name || 'Usuario';
      this.membership = data.membership || 'Sin membresía';
      this.nextClass = data.nextClass || null;
    });

    // Notificaciones globales
    this.firebase.getDocument('config/general').then((data: any) => {
      this.notifications = data['notifications'] || [];
    });
  }

  verClases() {
    // Aquí va navegación a pantalla de clases
    console.log('Ir a clases');
  }

  registrarAsistencia() {
    // Lógica para registrar asistencia
    console.log('Asistencia registrada');
  }

  verHistorial() {
    // Ir a historial del usuario
    console.log('Ir al historial');
  }

  logout() {
    this.firebase.signOut();
  }
}