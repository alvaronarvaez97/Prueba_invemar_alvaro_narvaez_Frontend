import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//servicios 
import { LugaresService } from './lugares.service';
import { EspeciesService } from './especies.service';
import { AvistamientoService } from './avistamiento.service';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { LugaresComponent } from './lugares/lugares.component';
import { EspeciesComponent } from './especies/especies.component';
import { AvistamientosComponent } from './avistamientos/avistamientos.component';
import { NuevoAvistamientoComponent } from './nuevo-avistamiento/nuevo-avistamiento.component';
import { NuevoAvistamientoService } from './nuevo-avistamiento.service';
import { BuscarEspecieService } from './buscar-especie.service';
import { BuscarEspecieComponent } from './buscar-especie/buscar-especie.component';
import { ActualizarLugaresComponent } from './actualizar-lugares/actualizar-lugares.component';

const routes: Routes = [
  {path: '', component:BuscarEspecieComponent},
  {path: 'Actualizar', component:ActualizarLugaresComponent},
  {path: 'buscarespecie', component:BuscarEspecieComponent},
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
    AvistamientosComponent,
    NuevoAvistamientoComponent,
    BuscarEspecieComponent,
    ActualizarLugaresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [LugaresService, AvistamientoService, EspeciesService, NuevoAvistamientoService, BuscarEspecieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
