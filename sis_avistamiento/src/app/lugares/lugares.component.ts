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
  constructor(private _service:LugaresService, private router:Router) { 
    this._service.getLugares().subscribe(data =>{
      this.lugares =data;
    });
  }

  ngOnInit(): void {
  }

}
