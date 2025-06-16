import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports:[IonicModule, CommonModule]
})
export class HomePage implements OnInit {

   userData: any = null;
  notifications: string[] = [];

  constructor(private firebaseService: FirebaseService) {}

  async ngOnInit() {
    const currentUser = this.firebaseService.getAuth().currentUser;
    if (!currentUser) return;

    const uid = currentUser.uid;

    try {
      // Obtener datos del usuario
      const userDoc = await this.firebaseService.getDocument(`users/${uid}`);
      console.log('Datos del usuario:', userDoc);  // 👈 Verifica aquí en consola
      this.userData = userDoc;

      // Obtener notificaciones
      const configDoc = await this.firebaseService.getDocument('config/general');
      this.notifications = configDoc?.['notifications'] || [];

    } catch (error) {
      console.error('Error al cargar datos de Firestore:', error);
    }
  }
}