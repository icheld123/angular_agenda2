import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-component',
  templateUrl: './toolbar-component.component.html',
  styleUrls: ['./toolbar-component.component.css']
})
export class ToolbarComponent implements OnInit{

  imageToolbar = '../../../assets/image/imageToolbar.jpg';
  constructor(){}

  ngOnInit(){

  }
  // logo = 'https://cdn.icon-icons.com/icons2/2079/PNG/512/dog_pet_animal_japanese_shiba_inu_japan_icon_127300.png';
  // submenu = [
  //   {nombre: 'Perros',
  //   url:'/gatos'},
  //   {nombre: 'Gatos',
  //   url:'/perros'}]
}
