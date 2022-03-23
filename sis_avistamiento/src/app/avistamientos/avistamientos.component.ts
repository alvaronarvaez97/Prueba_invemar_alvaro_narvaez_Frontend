import { Component, OnInit } from '@angular/core';
import { AvistamientoService } from '../avistamiento.service';

@Component({
  selector: 'app-avistamientos',
  templateUrl: './avistamientos.component.html',
  styleUrls: ['./avistamientos.component.css']
})
export class AvistamientosComponent implements OnInit {

  avistamiento: any=[]
  constructor(private _service:AvistamientoService) { 
    this._service.getAvistamiento().subscribe(data =>{
      this.avistamiento =data;
    });
  }

  ngOnInit(): void {
  }

}
