import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//servicios 
import { LugaresService } from './lugares.service';
import { EspeciesService } from './especies.service';
import { AvistamientoService } from './avistamiento.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { LugaresComponent } from './lugares/lugares.component';
import { EspeciesComponent } from './especies/especies.component';
import { AvistamientosComponent } from './avistamientos/avistamientos.component';

const routes: Routes = [
  {path: '', component:EncabezadoComponent},
  {path: 'lugares', component:LugaresComponent},
  {path: 'especies', component:EspeciesComponent},
  {path: 'avistamiento', component:AvistamientosComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    LugaresComponent,
    EspeciesComponent,
    AvistamientosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LugaresService, AvistamientoService, EspeciesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
