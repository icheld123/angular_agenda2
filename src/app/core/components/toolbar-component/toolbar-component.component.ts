import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-component',
  templateUrl: './toolbar-component.component.html',
  styleUrls: ['./toolbar-component.component.css']
})
export class ToolbarComponent implements OnInit{

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
