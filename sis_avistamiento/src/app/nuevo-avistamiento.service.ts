import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NuevoAvistamientoService {

  private url: string= 'http://localhost:9003/api/resources'
  

  constructor(private http:HttpClient) { }

  addLugar(form: any){
    return this.http.post(`${this.url}/lugar/add`, form)
  }

  addEspecies(form: any){
    return this.http.post(`${this.url}/especies/add`, form)
  }

  addAvistamiento(form: any){
    return this.http.post(`${this.url}/avistamiento/add`, form)
  }

}
