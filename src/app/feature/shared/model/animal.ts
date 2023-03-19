export class Animal {
  id: number;
  nombre: string;
  edad: number;
  raza: string;
  tamano: string;
  sexo: string;
  vacunas: boolean;
  esterilizacion: boolean;
  enfermedades: boolean;
  convivenciaGatos: boolean;
  convivenciaPerros: boolean;
  convivenciaNinos: boolean;
  cualidades: string;
  descripcion: string;
  estado: string;
  ubicacion: string;
  especie: string;
  imagen: string;

  constructor(id: number, nombre: string, edad: number, raza: string, tamano: string, sexo: string, vacunas: boolean, esterilizacion: boolean, enfermedades: boolean, convivenciaGatos: boolean,
    convivenciaPerros: boolean, convivenciaNinos: boolean, cualidades: string, descripcion: string, estado: string, ubicacion: string, especie: string, imagen: string){
      this.id = id;
      this.nombre = nombre;
      this.edad = edad;
      this.raza = raza;
      this.tamano = tamano;
      this.sexo = sexo;
      this.vacunas = vacunas;
      this.esterilizacion = esterilizacion;
      this.enfermedades = enfermedades;
      this.convivenciaGatos = convivenciaGatos;
      this.convivenciaPerros = convivenciaPerros;
      this.convivenciaNinos = convivenciaNinos;
      this.cualidades = cualidades;
      this.descripcion = descripcion;
      this.estado = estado;
      this.ubicacion = ubicacion;
      this.especie = especie;
      this.imagen = imagen;
  }
}
