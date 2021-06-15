import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './Componentes/empleado/empleado.component';
import { ProductoComponent } from './Componentes/producto/producto.component';
import { ServicioComponent } from './Componentes/servicio/servicio.component';
import { UsuarioComponent } from './Componentes/usuario/usuario.component';
import { ProductoService } from './Servicios/producto.service';
import { EmpleadoService } from './Servicios/empleado.service';
import { ServicioService } from './Servicios/servicio.service';
import { UsuarioService } from './Servicios/usuario.service';
@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    ProductoComponent,
    ServicioComponent,
    UsuarioComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ProductoService,
  EmpleadoService,
  ServicioService,
  UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
