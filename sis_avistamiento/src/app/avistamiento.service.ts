import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AvistamientoService {

  private url: string= 'http://localhost:9003/api/resources'

  constructor(private http:HttpClient) { }

  getAvistamiento(){
    return this.http.get(`${this.url}/avistamiento`);
  }

}
