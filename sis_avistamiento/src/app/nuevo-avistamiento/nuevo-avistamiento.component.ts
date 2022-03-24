import { Component, OnInit } from '@angular/core';
import { NuevoAvistamientoService } from '../nuevo-avistamiento.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-avistamiento',
  templateUrl: './nuevo-avistamiento.component.html',
  styleUrls: ['./nuevo-avistamiento.component.css']
})
export class NuevoAvistamientoComponent implements OnInit {

  constructor(private _service: NuevoAvistamientoService) { }

  ngOnInit(): void {
  }

//   FormularioLugar= new FormGroup({
//     pais: new FormControl('',Validators.required),
//     departamento: new FormControl('',Validators.required),
//     ciudad: new FormControl('',Validators.required),
//     nombre_lugar: new FormControl('',Validators.required)
//   })


//   onSubmit(){
//     this._service.addLugar(this.FormularioLugar.value).subscribe(data=>{
//     });
// ;
//   }
}
