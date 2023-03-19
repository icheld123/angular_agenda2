import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Animal } from 'src/app/feature/shared/model/animal';
import { PeluditosComponent } from '../peluditos-component/peluditos-component.component';

const DATOS_EN_CATEGORIAS: object = {
  perro: "especie",
  gato: "especie",
  hembra: "sexo",
  macho: "sexo",
  desde: "edad",
  hasta: "edad",
  grande: "tamano",
  mediano: "tamano",
  pequeño: "tamano",
  convivenciaGatos: "convivenciaGatos",
  convivenciaPerros: "convivenciaPerros",
  convivenciaNinos: "convivenciaNinos",
  esterilizacion: "esterilizacion",
  vacunas: "vacunas",
};

const ENCABEZADOS_UNICOS_A_EVALUAR: Array<string> = ["especie", "sexo", "edad", "tamano", "convivenciaGatos", "convivenciaPerros", "convivenciaNinos", "esterilizacion", "vacunas"];

@Component({
  selector: 'app-filtro-component',
  templateUrl: './filtro-component.component.html',
  styleUrls: ['./filtro-component.component.css']
})
export class FiltroComponentComponent implements OnInit {

  filtroForm: FormGroup;
  valueWidth: string;
  showButtonOpenFilter: boolean;
  public animales: Animal[];

  constructor(private peluditosComponent: PeluditosComponent){
  }

  public openFilter() {
    this.valueWidth = "250px";
    this.showButtonOpenFilter = false;
  }

  public closeFilter() {
    this.valueWidth = "0px";
    this.showButtonOpenFilter = true;
  }

  async iniciarFiltro(){
    //console.log(this.filtroForm.value);
    await this.peluditosComponent.filtrarPeludos(this.filtroForm.value,
                              DATOS_EN_CATEGORIAS, ENCABEZADOS_UNICOS_A_EVALUAR);
  }

  public construirFormularioFiltro(){
    this.filtroForm = new FormGroup({
      perro: new FormControl(),
      gato: new FormControl(),
      hembra: new FormControl(),
      macho: new FormControl(),
      desde: new FormControl(),
      hasta: new FormControl(),
      grande: new FormControl(),
      mediano: new FormControl(),
      pequeño: new FormControl(),
      convivenciaGatos: new FormControl(),
      convivenciaPerros: new FormControl(),
      convivenciaNinos: new FormControl(),
      esterilizacion: new FormControl(),
      vacunas: new FormControl(),
    });
  }

  ngOnInit(){
    this.valueWidth = "0px";
    this.showButtonOpenFilter = true;
    this.construirFormularioFiltro();
  }
}
