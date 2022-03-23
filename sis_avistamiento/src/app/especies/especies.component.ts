import { Component, OnInit } from '@angular/core';
import { EspeciesService } from '../especies.service';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.css']
})
export class EspeciesComponent implements OnInit {

  especies: any=[]
  constructor(private _service:EspeciesService) { 
    this._service.getEspecies().subscribe(data =>{
      this.especies =data;
    });
  }


  ngOnInit(): void {
  }

}
