import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../lugares.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-lugares',
  templateUrl: './actualizar-lugares.component.html',
  styleUrls: ['./actualizar-lugares.component.css']
})
export class ActualizarLugaresComponent implements OnInit {

  constructor(private _service: LugaresService) { }

  ngOnInit(): void {
  }

  usuario: any=[];

  Formulario= new FormGroup({
    id: new FormControl('',Validators.required),
    Nombres: new FormControl('',Validators.required),
    usuario: new FormControl('',Validators.required),
    pass: new FormControl('',Validators.required)
  })

  onSubmit(){
    console.log(this.Formulario.value);
    this._service.updateLugares(this.Formulario.value.id, this.Formulario.value).subscribe(data=>{
      // if (data !== null){
      //   alert('usuario actualizado con exito!!');
      // }
      this.usuario= data;
    });
    this.Formulario.reset();
  }

}
