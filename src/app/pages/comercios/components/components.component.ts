import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comercios } from '../model/comercios.model';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent  {

  @Input() comercio: Comercios;

  @Output() realizada = new EventEmitter<Comercios>();
  @Output() update = new EventEmitter<Comercios>();
  @Output() delete = new EventEmitter<Comercios>();


}
