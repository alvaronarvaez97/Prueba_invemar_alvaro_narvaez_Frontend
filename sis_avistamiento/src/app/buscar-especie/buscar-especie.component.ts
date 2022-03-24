import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BuscarEspecieService } from '../buscar-especie.service';

@Component({
  selector: 'app-buscar-especie',
  templateUrl: './buscar-especie.component.html',
  styleUrls: ['./buscar-especie.component.css']
})
export class BuscarEspecieComponent implements OnInit {

  constructor(private _service:BuscarEspecieService) { }

  ngOnInit(): void {
  }
  usuario: any=[];

  Formulario= new FormGroup({
    especie: new FormControl('',Validators.required)
  })

  onSubmit(){
    this._service.getConsultaEspecie(this.Formulario.value).subscribe(data=>{
      this.usuario = data
      console.log(this.usuario);
      });
    }

}
