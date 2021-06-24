import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './Componentes/empleado/empleado.component';
import { AgregarEmpleadoComponent } from './Componentes/empleado/agregar-empleado/agregar-empleado.component';
import { ProductoComponent } from './Componentes/producto/producto.component';
import { AgregarProductoComponent } from './Componentes/producto/agregar-producto/agregar-producto.component';
import { ServicioComponent } from './Componentes/servicio/servicio.component';
import { AgregarServicioComponent } from './Componentes/servicio/agregar-servicio/agregar-servicio.component';
import { UsuarioComponent } from './Componentes/usuario/usuario.component';
import { AgregarUsuarioComponent } from './Componentes/usuario/agregar-usuario/agregar-usuario.component';
import { VentaProductoComponent } from './Negocio/venta-producto/venta-producto.component';
import { VentaServicioComponent } from './Negocio/venta-servicio/venta-servicio.component';
import { FiltroServicioComponent } from './Negocio/filtro-servicio/filtro-servicio.component';
import { FiltroProductoComponent } from './Negocio/filtro-producto/filtro-producto.component';
import { CajaComponent } from './Negocio/caja/caja.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component: InicioComponent},
  {path:'empleado',component: EmpleadoComponent},
  {path:'producto',component:ProductoComponent},
  {path:'servicio',component:ServicioComponent},
  {path:'usuario',component:UsuarioComponent},
  {path:'agregar-producto/:id',component:AgregarProductoComponent},
  {path:'agregar-empleado/:id',component:AgregarEmpleadoComponent},
  {path:'agregar-usuario/:id',component:AgregarUsuarioComponent},
  {path:'agregar-servicio/:id',component:AgregarServicioComponent},
  {path:'venta-producto',component:VentaProductoComponent},
  {path:'filtro-producto',component:FiltroProductoComponent},
  {path:'filtro-servicio',component:FiltroServicioComponent},
  {path:'venta-servicio',component:VentaServicioComponent},
  {path:'caja',component:CajaComponent},
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }