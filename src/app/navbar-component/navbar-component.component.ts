import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent {
  logo = 'https://cdn.icon-icons.com/icons2/2079/PNG/512/dog_pet_animal_japanese_shiba_inu_japan_icon_127300.png';
  submenu = [
    {nombre: 'Perros',
    url:'/gatos'},
    {nombre: 'Gatos',
    url:'/perros'}]
}
