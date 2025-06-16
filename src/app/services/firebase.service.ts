import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; 
import { User } from '../models/user.model';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth'
import {AngularFirestore} from '@angular/fire/compat/firestore'
import {getFirestore,setDoc, doc, getDoc} from '@angular/fire/firestore'
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject (AngularFirestore);
  utlsSvc = inject(UtilsService)

  //autenticacion
  getAuth(){
    return getAuth();
  }


  signIn(user:User,){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password)
  }
  signUp(user:User,){
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
  }
  updateUser(displayName: string){
    return updateProfile(getAuth().currentUser,{displayName})
  }

  sendRecoveryEmail(email: string){
    return sendPasswordResetEmail(getAuth(), email)
  }
  //cerrar sesion
  signOut(){
    getAuth().signOut()
    localStorage.removeItem('user')
    this.utlsSvc.routerLink('/auth')
  }


  //base de datos
  setDocument(path:string, data:any){
    return setDoc(doc(getFirestore(),path),data);

  }
  async getDocument(path:string){
    return (await getDoc(doc(getFirestore(),path))).data(); 

  }

  getCurrentUserId(): string | null {
    return this.getAuth().currentUser?.uid || null;
  }
  async updateDocument(path: string, data: any) {
    const docRef = doc(getFirestore(), path);
    return await setDoc(docRef, data, { merge: true }); // merge mantiene los campos previos
  }
  


}
