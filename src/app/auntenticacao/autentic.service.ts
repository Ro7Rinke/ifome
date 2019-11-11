import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import{Router} from '@angular/router';
import {AlertController, NavController} from '@ionic/angular'
import {auth} from 'firebase/app'
@Injectable({
  providedIn: 'root'
})
export class AutenticService {

  constructor(
    private fbAutentica:AngularFireAuth,
    private alertCrtl: AlertController,
    private afDB: AngularFireDatabase,
    private Route:Router,
    private navCrtl: NavController ) { }

  autenticacao(ehlogin:boolean, nome:string, email:string, senha:string){

    if ( ehlogin ){
      this.loginConta(email, senha);
    }else{  
      this.criarConta(nome,email,senha);
    }

  }

  loguout():Promise<void>{
    this.navCrtl.navigateBack('login');
    return this.fbAutentica.auth.signOut();
    

  }

  private loginConta(email:string, senha:string){
    this.fbAutentica.auth.signInWithEmailAndPassword(email, senha).then (() =>{
      this.presentAlert("Usuario","Usuario autenticado").then(()=>{
        this.navCrtl.navigateForward('comercios');
      });
      
    });
  }

  private criarConta(nome:string, email:string, senha:string)
{
  
    this.fbAutentica.auth.createUserWithEmailAndPassword(email, senha).then((newUser) =>{
      this.fbAutentica.auth.signInWithEmailAndPassword(email, senha).then((authenticadeUser) =>{
        let uid = authenticadeUser.user.uid
        let userObject = {
          uid: uid,
          name: nome,
          email: email, 
          photoURL: ""
        };

        newUser.user.updateProfile({
          displayName: nome,
          photoURL: null
        })

        return this.afDB.list('userProfile').update(uid, userObject).then(() => true,
         error =>{
          throw new Error(error.message)
         
         })

      }, error =>{
        throw new Error(error.message)
      })
    }, error =>{
      throw new Error(error.message)
    }).then((response) =>{
      this.presentAlert("Usuario","Usuario cadastrado com sucesso");
      
    })
    
    this.loguout();
}

async presentAlert(title: string, message: string ) {
  const alert = await this.alertCrtl.create({
    header: title,
    message: message,
    buttons: ['Confirmar']
  });

  await alert.present();
}

}
