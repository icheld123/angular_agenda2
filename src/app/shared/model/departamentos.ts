export class Departamentos {
  name: string;
  relatedElements: string[];

  constructor(name: string, relatedElements: string[]){
      this.name = name;
      this.relatedElements = relatedElements;
  }
}
