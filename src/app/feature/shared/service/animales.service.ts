import { Injectable } from '@angular/core';
import { ResponseRequest } from '../model/responseRequest';
import { HttpgeneralService } from 'src/app/core/services/httpgeneral.service';

@Injectable()
export class AnimalesService {

  constructor(protected http: HttpgeneralService) {}

  public obtenerPeludos(endpoint: string, apiRoute: string, data: any){
    return this.http.doGet<ResponseRequest>(`${endpoint + apiRoute}`, data);
  }

}
