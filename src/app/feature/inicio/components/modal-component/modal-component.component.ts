import { Component } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import reglas from 'src/assets/csv/reglasadopcion.json';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class ModalComponentComponent {
  title = 'Información importante';
  Reglas: any = reglas;
  p: number =1;
  public show = false;

  pageChangeEvent(event: number){
    this.p = event;
  }
  showModal(){
    if(this.p==4){
      this.show=!this.show;
    }
  }
}
