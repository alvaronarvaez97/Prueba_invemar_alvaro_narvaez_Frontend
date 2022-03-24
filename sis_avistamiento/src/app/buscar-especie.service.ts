import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscarEspecieService {

  url: string= 'http://localhost:9003/api/resources'
  constructor(private http: HttpClient) { }

  getConsultaEspecie(form: any){
    return this.http.get(`${this.url}/consulta`, form);
  }

  getLugar(form: any){
    return this.http.get(`${this.url}/`, form);
  }


}
