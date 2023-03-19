import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AnimalesService } from 'src/app/feature/shared/service/animales.service';
import { PeluditosComponent } from 'src/app/feature/peluditos/components/peluditos-component/peluditos-component.component';
import { Animal } from 'src/app/feature/shared/model/animal';
import { ResponseRequest } from 'src/app/feature/shared/model/responseRequest';

const params = {
  majorDimension: environment.majorDimension,
  key: environment.key
};

@Component({
  selector: 'app-adoptar-component',
  templateUrl: './adoptar-component.component.html',
  styleUrls: ['./adoptar-component.component.css']
})
export class AdoptarComponent implements OnInit {

  public peludos: Animal[];
  public responseRequest: ResponseRequest;
  public paramsMap: Map<string, string>;
  public ubicacionPeludoId: number;
  public existeParam: boolean;
  public animalElegido: Animal;
  public imagenPeludo: string;

  constructor(protected animalesService: AnimalesService){
    this.crearArrayPeluditos();
  }

  ngOnInit(){
    this.existeParam = false;
    if (window.location.href.indexOf("?") > 0) {
      this.paramsMap = AdoptarComponent.obtenerParametros();
      // console.log(this.paramsMap);
      let paramPeludo = this.paramsMap.get("index");
      if (paramPeludo != null){
        this.ubicacionPeludoId = +paramPeludo - 1;
      }
      // console.log("id: " + this.ubicacionPeludoId);
    }
  }

  static obtenerParametros(){
    let paramsBlock = window.location.href.split("?")[1];

    return paramsBlock.split('&').reduce((p, c) => {
        let components = c.split('=');
        p.set(components[0],components[1]);
        return p;
    }, new Map<string, string>());
  }

  async crearArrayPeluditos(){
    this.peludos = [];
    this.responseRequest = await this.animalesService.obtenerPeludos(environment.endpoint, environment.apiRoute, params).toPromise().then();
    this.peludos = PeluditosComponent.mapearArrayPeludos(this.responseRequest.values);

    this.animalElegido = this.peludos[this.ubicacionPeludoId];
    if (this.animalElegido != null){
      this.imagenPeludo = PeluditosComponent.identificarPathImagenes() + this.animalElegido.imagen;
      this.existeParam = true;
    }
  }

}
