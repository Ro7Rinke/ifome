import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AutenticService } from '../auntenticacao/autentic.service';

import {AlertController} from '@ionic/angular'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

autenticacaoForm: FormGroup;


configs = {
  ehLogin:true
}
private nomeControll = new FormControl('',[Validators.required,Validators.minLength(3)]);
private nomeTmp:String;

  constructor(private servicoAutenticacao:AutenticService,private fb:FormBuilder, private alertCrtl: AlertController ) { }

  ngOnInit() {
    this.createForm();
  }


    private createForm(): void{
      this.autenticacaoForm = this.fb.group({
        nome: ['',[Validators.required,Validators.minLength(3)]],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(12)]] 
      })

    }

    async onSubmit(): Promise<void>{
      if(this.configs.ehLogin){
        this.nomeTmp = "";
      }else{
        this.nomeTmp = this.autenticacaoForm.get('nome').value;
      }

      try {
        const credencial = await this.servicoAutenticacao.autenticacao(true,this.nomeTmp.valueOf(), this.autenticacaoForm.get('email').value,
        this.autenticacaoForm.get('password').value);

        console.log("Sucesso Credencial", credencial);
      } catch (e) {
        console.log("Ocorreu um erro ", e);
      }
    }

    async onSubmitRegister(): Promise<void>{
      
      this.nomeTmp = this.autenticacaoForm.get('nome').value;
      

      try {
        const credencial =  await this.servicoAutenticacao.autenticacao(false,this.nomeTmp.valueOf(), this.autenticacaoForm.get('email').value,
        this.autenticacaoForm.get('password').value);
        
      } catch (e) {
        console.log("Ocorreu um erro ", e);
      }
      
    }
    async presentAlert() {
      const alert = await this.alertCrtl.create({
        header: 'Usuário',
        message: 'Usuário cadastrado com sucesso.',
        buttons: ['Confirmar']
      });
  
      await alert.present();
    }
    get email(): FormControl{
      return <FormControl>this.autenticacaoForm.get('email');
    }

    get password(): FormControl{
      return <FormControl>this.autenticacaoForm.get('password');
    }
}
