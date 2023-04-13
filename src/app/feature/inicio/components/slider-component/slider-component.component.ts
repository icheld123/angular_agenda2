import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/feature/shared/model/noticia';
import { ResponseRequest } from 'src/app/feature/shared/model/responseRequest';
import { AnimalesService } from 'src/app/feature/shared/service/animales.service';
import { environment } from 'src/environments/environment';

const params = {
  majorDimension: environment.majorDimension,
  key: environment.key
};
const PATH_CONSULTA_IMAGENES_LOCAL = "../../../../../assets/image/noticias";
const PATH_CONSULTA_IMAGENES_PDN = "assets/image/noticias";

@Component({
  selector: 'app-slider-component',
  templateUrl: './slider-component.component.html',
  styleUrls: ['./slider-component.component.css']
})
export class SliderComponentComponent implements OnInit {
  public slideIndex: number = 0;
  public responseRequest: ResponseRequest;
  public noticias: Noticia[];
  public urlImage: string;

  constructor(protected animalesService: AnimalesService){
    this.listarNoticias();
  }

  async listarNoticias(){
    this.responseRequest = await this.animalesService.obtenerPeludos(environment.endpoint, environment.apiRouteNoticias, params).toPromise().then();
    if (this.responseRequest.values.length > 0){
      console.log("existen noticias");
      this.noticias = SliderComponentComponent.mapearArrayNoticias(this.responseRequest.values);
      console.log(this.noticias);
    }
    else {
      console.log("No existen noticias");
    }
  }

  static mapearArrayNoticias(values: string[]){
    let arrayDeObjetos = [];
    for (let index = 1; index < values.length; index++) {
      const element = values[index];
      let noticia = new Noticia(element[0],element[1],element[2]);
      arrayDeObjetos.push(noticia);
    }
    return arrayDeObjetos;
  }

  static identificarPathImagenesNoticias(){
    let ubicacionActual = window.location.href;
    console.log(ubicacionActual);
    return (ubicacionActual.indexOf("localhost") > 0 || ubicacionActual.indexOf("127.0.0.1") > 0) ? PATH_CONSULTA_IMAGENES_LOCAL : PATH_CONSULTA_IMAGENES_PDN
  }

  ngOnInit() {
    this.urlImage = SliderComponentComponent.identificarPathImagenesNoticias();
  }
}
