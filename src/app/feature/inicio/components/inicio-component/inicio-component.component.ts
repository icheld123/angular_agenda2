import { Component, OnInit } from '@angular/core';
import listado from 'src/assets/csv/lista-perros.json';

@Component({
  selector: 'app-inicio-component',
  templateUrl: './inicio-component.component.html',
  styleUrls: ['./inicio-component.component.css']
})
export class InicioComponentComponent {
  Listado: any = listado;
  constructor(){}

}
