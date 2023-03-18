import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/shared/model/animal';
// import mascotas from 'src/assets/csv/mascotas.json';
// import nacionalidades from 'src/assets/csv/nacionalidades.json';
// import departamentos from 'src/assets/csv/departamentos.json';
import { HttpgeneralService } from 'src/app/shared/service/httpgeneral.service';
import { ResponseRequest } from 'src/app/shared/model/responseRequest';
import { environment } from 'src/environments/environment';
import { Departamentos } from 'src/app/shared/model/departamentos';

const params = {
  majorDimension: environment.majorDimension,
  key: environment.key
};

const SELECTED_CAPITAL = "BOGOTÁ D.C.";

@Component({
  selector: 'app-formulario-component',
  templateUrl: './formulario-component.component.html',
  styleUrls: ['./formulario-component.component.css']
})
export class FormularioComponentComponent implements OnInit {

  public peludos: Animal[];
  public responseRequest: ResponseRequest;
  public paramsMap: Map<string, string>;
  public ubicacionPeludoId: number;

  // Mascotas: any = mascotas;
  // Nacionalidad: any = nacionalidades;
  // DEPARTAMENTOS: Departamentos[] = departamentos;
  // pais: string[]=[];

  constructor(private httpService: HttpgeneralService){
    this.crearArrayPeluditos();
  }

  ngOnInit(){
    this.paramsMap = this.obtenerParametros();
    console.log(this.paramsMap);
    let paramPeludo = this.paramsMap.get("index");
    if (paramPeludo != null){
      this.ubicacionPeludoId = +paramPeludo - 1;
    }
    console.log("id: " + this.ubicacionPeludoId);
  }

  public obtenerParametros(){
    let paramsBlock = window.location.href.split("?")[1];

    return paramsBlock.split('&').reduce((p, c) => {
        let components = c.split('=');
        p.set(components[0],components[1]);
        return p;
    }, new Map<string, string>());
  }

  async crearArrayPeluditos(){
    this.peludos = [];
    this.responseRequest = await this.httpService.get(environment.endpoint, environment.apiRoute, params).toPromise().then();

    for (let index = 1; index < this.responseRequest.values.length; index++) {
      const element = this.responseRequest.values[index];
      let animal = new Animal(parseInt(element[0]),element[1],parseInt(element[2]),element[3],element[4],
                              element[5],this.stringToBoolean(element[6]),
                              this.stringToBoolean(element[7]),this.stringToBoolean(element[8]),
                              this.stringToBoolean(element[9]),this.stringToBoolean(element[10]),
                              this.stringToBoolean(element[11]),element[12],element[13],element[14],element[15],element[16],element[17]);
      this.peludos.push(animal);
    }
    console.log(this.peludos[this.ubicacionPeludoId]);
  }

  public stringToBoolean(valueString: string){
    if (valueString.toLowerCase() === "true") return true;
    else return false;
  }


}
