import { Component, OnInit } from '@angular/core';
import {AutenticService} from '../../auntenticacao/autentic.service';
import { Observable, of } from 'rxjs';
import { Comercios } from './model/comercios.model';
@Component({
  selector: 'app-comercios',
  templateUrl: './comercios.page.html',
  styleUrls: ['./comercios.page.scss'],
})
export class ComerciosPage implements OnInit {
  comercios$: Observable<Comercios[]>;
  constructor(private serviçoAutenticacao: AutenticService) { }

  ngOnInit(): void {

    this.comercios$ = of([
      {id:'1',nome:'Pagani'},
      {id:'2',nome:'Pizzaria Do Marone'},
      {id:'3',nome:'Subway'},
      {id:'4',nome:'Kiberia Jacob'},
      {id:'5',nome:'Espaço Exclusivo'}
    ])

  }

  async logout(){
    this.serviçoAutenticacao.loguout();
  }
}
