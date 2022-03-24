import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../lugares.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  lugares: any=[]
  usuarios: any = []
  constructor(private _service:LugaresService, private router:Router) { 
    this._service.getLugares().subscribe(data =>{
      this.lugares =data;
    });
  }

  ngOnInit(): void {
  }

  Delete(id: any){
    this._service.deleteLugares(id).subscribe(data =>{
      if (data !== null){
        this._service.getLugares().subscribe(data =>{
          this.lugares =data;})
        alert('Usuario eliminado')
        this._service.getLugares().subscribe(data =>{
          this.lugares =data;
          if (this.lugares.token === false){
            console.log(this.lugares.message);
            this.lugares=[];
          }
        })

      }
    })
  }

  Actualizar(id: any){
    this.router.navigate(["Actualizar"])
  }

}
