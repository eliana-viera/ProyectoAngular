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
import { LoginService } from './Servicios/login.service';
import { InicioComponent } from './inicio/inicio.component';
import { AgregarProductoComponent } from './componentes/producto/agregar-producto/agregar-producto.component';
import { AgregarEmpleadoComponent } from './componentes/empleado/agregar-empleado/agregar-empleado.component';
import { AgregarUsuarioComponent } from './componentes/usuario/agregar-usuario/agregar-usuario.component';
import { AgregarServicioComponent } from './componentes/servicio/agregar-servicio/agregar-servicio.component';
import { VentaProductoComponent } from './Negocio/venta-producto/venta-producto.component';
import { VentaServicioComponent } from './Negocio/venta-servicio/venta-servicio.component';
import { FiltroProductoComponent } from './negocio/filtro-producto/filtro-producto.component';
import { FiltroServicioComponent } from './negocio/filtro-servicio/filtro-servicio.component';
import { CajaComponent } from './Negocio/caja/caja.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    ProductoComponent,
    ServicioComponent,
    UsuarioComponent,
    InicioComponent,
    AgregarProductoComponent,
    AgregarEmpleadoComponent,
    AgregarUsuarioComponent,
    AgregarServicioComponent,
    VentaProductoComponent,
    VentaServicioComponent,
    FiltroProductoComponent,
    FiltroServicioComponent,
    CajaComponent,
    LoginComponent
   
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
  UsuarioService, 
  LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
