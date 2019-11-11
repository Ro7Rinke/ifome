import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {AutenticService} from '../../auntenticacao/autentic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  autenticacaoForm: FormGroup;
  private nomeTmp:String;
  
    constructor(private servicoAutenticacao:AutenticService,private fb:FormBuilder) { }
  
    ngOnInit() {
      this.createForm();
    }
  
  
      private createForm(): void{
        this.autenticacaoForm = this.fb.group({
          email: ["", [Validators.required, Validators.email]],
          password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(12)]] 
        })
  
      }
  
      async onSubmit(): Promise<void>{
        try {
          this.nomeTmp = "";
           await this.servicoAutenticacao.autenticacao(true,this.nomeTmp.valueOf(), this.autenticacaoForm.get('email').value,
          this.autenticacaoForm.get('password').value);
  
          console.log("Sucesso Credencial");
        } catch (e) {
          console.log("Ocorreu um erro ", e);
        }
      }
  
      get email(): FormControl{
        return <FormControl>this.autenticacaoForm.get('email');
      }
  
      get password(): FormControl{
        return <FormControl>this.autenticacaoForm.get('password');
      }
}
