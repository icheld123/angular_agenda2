import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/feature/shared/model/animal';
import { ResponseRequest } from 'src/app/feature/shared/model/responseRequest';
import { AnimalesService } from 'src/app/feature/shared/service/animales.service';
import { environment } from 'src/environments/environment';
// import { ModalInfoextraComponent } from './modal-infoextra/modal-infoextra.component';

const params = {
  majorDimension: environment.majorDimension,
  key: environment.key
};

const MENSAJE_BUSQUEDA_POSITIVA = "¡Hay peluditos esperando por ti!";
const MENSAJE_BUSQUEDA_NEGATIVA = "No tenemos peluditos en este momento";
const MENSAJE_BUSQUEDA_NEGATIVA_CON_FILTRO = "No se obtuvieron resultados en la busqueda, pruebe nuevamente.";
const PATH_CONSULTA_IMAGENES_LOCAL = "../../assets/image/";
const PATH_CONSULTA_IMAGENES_PDN = "assets/image/";
const PELUDOS_POR_PAGINA = 4;

@Component({
  selector: 'app-peluditos-component',
  templateUrl: './peluditos-component.component.html',
  styleUrls: ['./peluditos-component.component.css']
})
export class PeluditosComponent implements OnInit{

  public peludosPorPagina: number = PELUDOS_POR_PAGINA;
  public paginaActual: number  = 1;
  public animales:Array<Animal>;
  public animalesFiltrados:Array<Animal>;
  public cantidasAnimales: number;
  public responseRequest: ResponseRequest;
  public contentModal:Animal;
  public urlConsultaImagenes:string;
  public urlParaRedireccionAdoptar:string;
  public urlParaRedireccionApadrinar:string;
  public validadorCargando:boolean = true;
  public mensaje: string;
  public valueMarginLeft: string;
  public paths = {
    pathImagenes: "",
    pathAdoptar: "/#/adoptar?index=",
    pathApadrinar: "/#/ayudar?index="
  }

  constructor(protected animalesService: AnimalesService){
    this.listarPeludos();
  }

  async listarPeludos(){
    this.paginaActual = 1;
    this.validadorCargando = true;
    this.animales = [];
    this.animalesFiltrados = [];
    this.responseRequest = await this.animalesService.obtenerPeludos(environment.endpoint, environment.apiRoute, params).toPromise().then();

    if (this.responseRequest.values.length > 0){
      this.animales = PeluditosComponent.mapearArrayPeludos(this.responseRequest.values);
      this.animalesFiltrados = this.animales;
      this.validadorCargando = false;
      this.mensaje = MENSAJE_BUSQUEDA_POSITIVA;
      this.cantidasAnimales = this.animalesFiltrados.length;
    }
    else {
      this.mensaje = MENSAJE_BUSQUEDA_NEGATIVA;
      this.cantidasAnimales = 0;
    }
  }

  static mapearArrayPeludos(values: string[]){
    let arrayDeObjetos = [];
    for (let index = 1; index < values.length; index++) {
      const element = values[index];
      let animal = new Animal(parseInt(element[0]),element[1],parseInt(element[2]),element[3],element[4],
                              element[5],PeluditosComponent.stringToBoolean(element[6]),
                              PeluditosComponent.stringToBoolean(element[7]),PeluditosComponent.stringToBoolean(element[8]),
                              PeluditosComponent.stringToBoolean(element[9]),PeluditosComponent.stringToBoolean(element[10]),
                              PeluditosComponent.stringToBoolean(element[11]),element[12],element[13],element[14],element[15],element[16],element[17]);
      arrayDeObjetos.push(animal);
    }
    return arrayDeObjetos;
  }

  async cambiarContenidoModal(animal: Animal){
    this.contentModal = animal;
  }

  async cambiarValueMarginLeft(value: string){
    this.valueMarginLeft = value;
  }

  async filtrarPeludos(datosForm: any, categoriasFiltro: any, categoriasUnicas:Array<string>){
    await this.listarPeludos();

    if (this.animales.length > 0){
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

      if (this.animalesFiltrados.length > 0){
        this.cantidasAnimales = this.animalesFiltrados.length;
        this.mensaje = MENSAJE_BUSQUEDA_POSITIVA;
      }
      else{
        this.mensaje = MENSAJE_BUSQUEDA_NEGATIVA_CON_FILTRO;
        this.cantidasAnimales = 0;
      }
    }
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

  static stringToBoolean(valueString: string){
    if (valueString.toLowerCase() === "true") return true;
    else return false;
  }

  static identificarPathImagenes(){
    let ubicacionActual = window.location.href;
    console.log(ubicacionActual);
    return (ubicacionActual.indexOf("localhost") > 0 || ubicacionActual.indexOf("127.0.0.1") > 0) ? PATH_CONSULTA_IMAGENES_LOCAL : PATH_CONSULTA_IMAGENES_PDN
  }

  ngOnInit(){
    this.contentModal = new Animal(0,"",0,"","","",false,false,false,false,false,false,"","","","","","");
    this.paths.pathImagenes = PeluditosComponent.identificarPathImagenes();
  }

}

