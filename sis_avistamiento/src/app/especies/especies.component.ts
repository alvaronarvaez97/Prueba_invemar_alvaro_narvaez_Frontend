import { Component, OnInit } from '@angular/core';
import { EspeciesService } from '../especies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.css']
})
export class EspeciesComponent implements OnInit {

  especies: any=[]
  usuarios: any = []
  constructor(private _service:EspeciesService, private router:Router) { 
    this._service.getEspecies().subscribe(data =>{
      this.especies =data;
    });
  }


  ngOnInit(): void {
  }

  Delete(id: any){
    this._service.deleteEspecie(id).subscribe(data =>{
      if (data !== null){
        this._service.getEspecies().subscribe(data =>{
          this.usuarios =data;})
        alert('Usuario eliminado')
        this._service.getEspecies().subscribe(data =>{
          this.usuarios =data;
          if (this.usuarios.token === false){
            console.log(this.usuarios.message);
            this.usuarios=[];
          }
        })

      }
    })
  }

  Actualizar(id:number){
    localStorage.setItem("id",id.toString());
    this.router.navigate(["editar"])
  }

}
