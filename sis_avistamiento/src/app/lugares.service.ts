import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  private url: string= 'http://localhost:9003/api/resources'

  constructor(private http:HttpClient) { }
  

    getLugares(){
      return this.http.get(`${this.url}/lugares`);
    }

}
