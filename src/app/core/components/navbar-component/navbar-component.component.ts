import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../../modelo/menu-items';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit{

  @Input()
  items: MenuItem[];
  imageToolbar:string;

  constructor(){}

  ngOnInit(){
    let ubicacionActual = window.location.href;
    console.log(ubicacionActual)
    if (ubicacionActual.indexOf("localhost") > 0 || ubicacionActual.indexOf("127.0.0.1") > 0){
      this.imageToolbar = '../../../assets/image/manada_logo.jpg';
    }
    else {
      this.imageToolbar = "assets/image/manada_logo.jpg";
    }
  }
  // logo = 'https://cdn.icon-icons.com/icons2/2079/PNG/512/dog_pet_animal_japanese_shiba_inu_japan_icon_127300.png';
  // submenu = [
  //   {nombre: 'Perros',
  //   url:'/gatos'},
  //   {nombre: 'Gatos',
  //   url:'/perros'}]
}
