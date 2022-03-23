import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EspeciesService {

  private url: string= 'http://localhost:9003/api/resources'
  
  constructor(private http:HttpClient) { }

  getEspecies(){
    return this.http.get(`${this.url}/especies`);
  }
}
