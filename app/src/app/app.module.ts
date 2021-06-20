import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
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
import { InicioComponent } from './inicio/inicio.component';
import { ComprasComponent } from './Negocio/compras/compras.component';
import { VentasComponent } from './Negocio/ventas/ventas.component';
import { ListaProductosComponent } from './Componentes/lista-productos/lista-productos.component';
import { ListaServiciosComponent } from './Componentes/lista-servicios/lista-servicios.component';
@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    ProductoComponent,
    ServicioComponent,
    UsuarioComponent,
    InicioComponent,
    ComprasComponent,
    VentasComponent,
    ListaProductosComponent,
    ListaServiciosComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
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
