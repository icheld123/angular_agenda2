import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseRequest } from '../model/responseRequest';

@Injectable({
  providedIn: 'root'
})
export class HttpgeneralService {

  constructor(public http: HttpClient) {}

  post(endpoint: string, apiRoute: string, body: any){
    return this.http.post(`${endpoint + apiRoute}`, body, {headers: this.getHttpHeaders()})
  }

  get(endpoint: string, apiRoute: string, data: any){
    return this.http.get<ResponseRequest>(`${endpoint + apiRoute}`, {params: data})
  }

  getHttpHeaders(): HttpHeaders {
    return new HttpHeaders().set('xhr-name', 'consultar registros');
  }
}
