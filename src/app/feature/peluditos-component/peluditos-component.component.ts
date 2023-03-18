import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/shared/model/animal';
import { ResponseRequest } from 'src/app/shared/model/responseRequest';
import { HttpgeneralService } from 'src/app/shared/service/httpgeneral.service';
import { environment } from 'src/environments/environment';
// import { ModalInfoextraComponent } from './modal-infoextra/modal-infoextra.component';

const params = {
  majorDimension: environment.majorDimension,
  key: environment.key
};

@Component({
  selector: 'app-peluditos-component',
  templateUrl: './peluditos-component.component.html',
  styleUrls: ['./peluditos-component.component.css']
})
export class PeluditosComponent implements OnInit{

  public animales:Array<Animal>;
  public animalesFiltrados:Array<Animal>;
  public cantidasAnimales: number;
  public responseRequest: ResponseRequest;
  public contentModal:Animal;
  public urlConsulta:string;

  constructor(private httpService: HttpgeneralService){
    this.listarPeludos();
  }

  async listarPeludos(){
    this.animales = [];
    this.animalesFiltrados = [];
    this.responseRequest = await this.httpService.get(environment.endpoint, environment.apiRoute, params).toPromise().then();
    //console.log("responseRequest:" + this.responseRequest);

    for (let index = 1; index < this.responseRequest.values.length; index++) {
      const element = this.responseRequest.values[index];
      let animal = new Animal(parseInt(element[0]),element[1],parseInt(element[2]),element[3],element[4],
                              element[5],this.stringToBoolean(element[6]),
                              this.stringToBoolean(element[7]),this.stringToBoolean(element[8]),
                              this.stringToBoolean(element[9]),this.stringToBoolean(element[10]),
                              this.stringToBoolean(element[11]),element[12],element[13],element[14],element[15],element[16],element[17]);
      this.animales.push(animal);
      this.animalesFiltrados.push(animal);
    }
    this.cantidasAnimales = this.animalesFiltrados.length;

    //console.log(this.animales);
  }

  async cambiarContenidoModal(animal: Animal){
    this.contentModal = animal;
  }

  async filtrarPeludos(datosForm: any, categoriasFiltro: any, categoriasUnicas:Array<string>){
    await this.listarPeludos();
    this.animalesFiltrados = [];
    let llaves:Array<string> = Object.keys(categoriasFiltro); //se extraen en string las llaves (nombre de categorias en filtro)

    for (let k = 0; k < this.animales.length; k++){
      let validar = true;
      let animal: Animal = this.animales[k];
      for (let i = 0; i < categoriasUnicas.length; i++) {
        if (validar){
          // Se agrupan llaves por categoria. Ej. la llave Macho y Hembra, pertenecen a la categoria sexo
          let llavesAgrupadasPorCategoriaExcel = this.agruparLlavesPorCategoria(llaves, categoriasFiltro, categoriasUnicas[i]);
          validar = this.validarValueAnimal(animal, categoriasUnicas[i], llavesAgrupadasPorCategoriaExcel, datosForm, validar);  //valida value tipo String y Boolean
        }
        else break;

      }

      if(validar){
        this.animalesFiltrados.push(animal);
        //console.log(animal);
      }
    }
    this.cantidasAnimales = this.animalesFiltrados.length;
  }

  public validarValueAnimal(animal:Animal, categoriaUnica:string, llavesAgrupadasPorCategoriaExcel:string[], datosForm: any, validar:boolean): boolean{
    // Si llavesAgrupadasPorCategoriaExcel > 1, entonces debe ser un string que debe validarse entre los
    // posibles checkbox. Ej. tamano -> puede ser grande, mediano, pequeno.
    let valorAtributoAnimal = animal[categoriaUnica as keyof typeof animal];
    if (llavesAgrupadasPorCategoriaExcel.length > 1 && typeof (valorAtributoAnimal) == "string"){
      let suma = 0;
      llavesAgrupadasPorCategoriaExcel.forEach(element => {
        // se valida si hay checkbox en true y se suman. Cada true es igual a 1.
        if (datosForm[element]) {
          suma = suma + 1;
        }
      })
      // si la suma es mayor a 0, significa que al menos un checkbox de la categoria es true.
      if (suma > 0){
        // se valida si en el formulario, el valor(perro) de la categoriaUnica (especie) es true. Ej. datosForm["perro"]
        // es decir, si el checkbox es true, significa que se quieren visualizar perros.
        if (!datosForm[valorAtributoAnimal.toLowerCase()]){
          validar = false;
        }
      }
    }

    else if(llavesAgrupadasPorCategoriaExcel.length > 1 && typeof (valorAtributoAnimal) == "number"){
      let desde = 0;
      let hasta = 0;

      llavesAgrupadasPorCategoriaExcel.forEach(element => {
        if (element == "desde") {
          desde = datosForm[element];
        }
        else if (element == "hasta") {
          hasta = datosForm[element];
        }
      })
      if (desde < hasta && desde >= 0 && hasta > 0){
        if (valorAtributoAnimal < desde || valorAtributoAnimal > hasta){
          validar = false;
        }
      }
    }

    // Si llavesAgrupadasPorCategoriaExcel <= 1, entonces debe ser un boolean que debe validarse con su
    // unico checkbox. Ej. convivenciaGatos -> convivenciaGatos
    else{
      // se valida si en el form es true, sino no hace falta, ya que significa que el usuario no esta siendo restrictivo.
      if (datosForm[llavesAgrupadasPorCategoriaExcel[0]]){
        if (categoriaUnica in animal && datosForm[categoriaUnica as keyof typeof datosForm]){
          if(!animal[categoriaUnica as keyof typeof animal]){
            validar = false;
          }

        }
      }
    }
    return validar;
  }

  public agruparLlavesPorCategoria(llavesFiltro: string[], categoriasFiltro:any, categoriaUnica:string): string[]{
    let llavesAgrupadasPorCategoriaExcel = [];
    for(let j = 0; j < llavesFiltro.length; j++){
      if (categoriasFiltro[llavesFiltro[j]] == categoriaUnica){
        llavesAgrupadasPorCategoriaExcel.push(llavesFiltro[j]);
      }
    }
    return  llavesAgrupadasPorCategoriaExcel
  }

  public stringToBoolean(valueString: string){
    if (valueString.toLowerCase() === "true") return true;
    else return false;
  }

  ngOnInit(){
    this.contentModal = new Animal(0,"",0,"","","",false,false,false,false,false,false,"","","","","","");
    let ubicacionActual = window.location.href;
    if (ubicacionActual.indexOf("localhost") > 0 || ubicacionActual.indexOf("127.0.0.1") > 0){
      this.urlConsulta = "../../assets/image/";
    }
    else {
      this.urlConsulta = "assets/image/";
    }
  }

}

