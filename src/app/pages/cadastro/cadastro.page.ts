import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {AutenticService} from '../../auntenticacao/autentic.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  autenticacaoForm: FormGroup;
  private nomeTmp:String;
  constructor(private servicoAutenticacao:AutenticService,private fb:FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }


  private createForm(): void{
    this.autenticacaoForm = this.fb.group({
      nome:["",[Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(12)]] 
    })

  }
  async onSubmitRegister(): Promise<void>{
        
    this.nomeTmp = this.autenticacaoForm.get('nome').value;
    

    try {
       await this.servicoAutenticacao.autenticacao(false,this.nomeTmp.valueOf(), this.autenticacaoForm.get('email').value,
      this.autenticacaoForm.get('password').value);
      
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
