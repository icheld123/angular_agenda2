import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import mascotas from 'src/assets/csv/mascotas.json';
import nacionalidades from 'src/assets/csv/nacionalidades.json';



@Component({
  selector: 'app-formulario-component',
  templateUrl: './formulario-component.component.html',
  styleUrls: ['./formulario-component.component.css']
})
export class FormularioComponentComponent {
  Mascotas: any = mascotas;
  Nacionalidad: any = nacionalidades;
  pais: string[]=[];
  constructor(){}
  infoMascota = new FormGroup({
    mascota: new FormGroup('',Validators.required),
    nommascota : new FormGroup('',Validators.required),
    date : new FormControl('',Validators.required),
    cambionombre: new FormControl('',Validators.required),
    nuevonombre: new FormControl('',Validators.required)
  });
  infoAdoptante = new FormGroup({
    name : new FormControl('',Validators.required),
    lastname : new FormControl('',Validators.required),
    birthdate : new FormControl('',Validators.required),
    age : new FormControl('',Validators.required),
    pais : new FormControl('',Validators.required),
    estadocivil : new FormControl('',Validators.required),
    celular : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    vivienda : new FormControl('',Validators.required),
    tipovivienda : new FormControl('',Validators.required),
    tiempovivienda : new FormControl('',Validators.required),
    permitemascota : new FormControl('',Validators.required),
    cambiovivienda : new FormControl('',Validators.required),
    direccion : new FormControl('',Validators.required),
    barrio : new FormControl('',Validators.required),
    localidad : new FormControl('',Validators.required),
    ciudad : new FormControl('',Validators.required),
    empresa : new FormControl('',Validators.required),
    cargo : new FormControl('',Validators.required),
    contrato : new FormControl('',Validators.required),
    dirtrabajo : new FormControl('',Validators.required),
    teltrabajo : new FormControl('',Validators.required),
    facebook : new FormControl('',Validators.required),
    instagram : new FormControl('',Validators.required),
    razonadopcion : new FormControl('',Validators.required),
    cantfamilia : new FormControl('',Validators.required),
    todosadopcion : new FormControl('',Validators.required),
    menores : new FormControl('',Validators.required),
    //variable para guardar varias edades de menores de edad
    alergicos : new FormControl('',Validators.required),
    alergias : new FormControl('',Validators.required),
    enfermo : new FormControl('',Validators.required),
    enfermedad : new FormControl('',Validators.required),
    viaje : new FormControl('',Validators.required),
    rupturafamiliar : new FormControl('',Validators.required),
    proyadopcion : new FormControl('',Validators.required),
    compadoptado : new FormControl('',Validators.required),
    tammascota : new FormControl('',Validators.required),
    gastomascota : new FormControl('',Validators.required),
    responsablemascota : new FormControl('',Validators.required),
    cuidados : new FormControl('',Validators.required),
    conscientegastos : new FormControl('',Validators.required),
    otrosperros : new FormControl('',Validators.required),
    cantperros : new FormControl('',Validators.required),
    sexoperro : new FormControl('',Validators.required),
    cantgatos : new FormControl('',Validators.required),
    sexogato : new FormControl('',Validators.required),
    adaptnuevamascota : new FormControl('',Validators.required),
    mascotasesterilizadas : new FormControl('',Validators.required),
    mascotasprevias : new FormControl('',Validators.required),
    estadomascoprevia : new FormControl('',Validators.required),
    periodoadaptacion : new FormControl('',Validators.required),
    metodoensenanza : new FormControl('',Validators.required),
    responsabilidad : new FormControl('',Validators.required),
    foto : new FormControl('',Validators.required),
    visitadom : new FormControl('',Validators.required),
    lugarseguro : new FormControl('',Validators.required),
    espacio : new FormControl('',Validators.required),
    otrosespacios : new FormControl('',Validators.required),
    dormirmascota : new FormControl('',Validators.required),
    advEntrega : new FormControl('',Validators.required),
    atencionmascota : new FormControl('',Validators.required),
    vetcabecera : new FormControl('',Validators.required),
    datosvetcabecera : new FormControl('',Validators.required),
    recursosvet : new FormControl('',Validators.required),
    esterilizar : new FormControl('',Validators.required),
    vigilanciamascota : new FormControl('',Validators.required),
    horassolamascota : new FormControl('',Validators.required),
    necesidadesmascota : new FormControl('',Validators.required),
    tiempodedicacion : new FormControl('',Validators.required),
    adopcionpersonal : new FormControl('',Validators.required),
    transporte : new FormControl('',Validators.required),
    espaciomascota : new FormControl('',Validators.required),
    colaboracion : new FormControl('',Validators.required),
    firmacontrato : new FormControl('',Validators.required),
    referenciapersonal : new FormControl('',Validators.required),
    comentario : new FormControl('',Validators.required),
  })

}
