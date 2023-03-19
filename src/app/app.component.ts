import { Component } from '@angular/core';
import { MenuItem } from './core/modelo/menu-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mascotas';
  public opciones: MenuItem[] = [
    {url: '/inicio', nombre: 'Inicio'},
    {url: '/peluditos', nombre: 'Peluditos'},
    {url: '/adoptar', nombre: 'Adoptar'},
    {url: '/ayudar', nombre: 'Ayudar'}
  ];

}
