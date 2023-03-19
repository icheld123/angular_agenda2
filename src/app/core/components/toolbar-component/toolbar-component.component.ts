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
      this.imageToolbar = '../../../assets/image/manada_logo.png';
    }
    else {
      this.imageToolbar = "assets/image/manada_logo.png";
    }

  }
}
