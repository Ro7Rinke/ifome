import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';


import {auth} from 'firebase/app'
@Injectable({
  providedIn: 'root'
})
export class AutenticService {

  constructor(private fbAutentica:AngularFireAuth) { }

  autenticacao(ehlogin:boolean, nome:string, email:string, senha:string){

    if ( ehlogin ){
      this.loginConta(email, senha);
    }else{
      this.criarConta(nome,email,senha);
    }

  }

  loguout():Promise<void>{
    return this.fbAutentica.auth.signOut();
  }

  private loginConta(email:string, senha:string):Promise<auth.UserCredential>{
    return this.fbAutentica.auth.signInWithEmailAndPassword(email, senha);
  }

  private criarConta(nome:string, email:string, senha:string):Promise<auth.UserCredential>
{
  
    return this.fbAutentica.auth.createUserWithEmailAndPassword(email, senha)
            .then(credentials => credentials.user.updateProfile({displayName: nome, photoURL:null})
            .then(()=>credentials));
}


}
