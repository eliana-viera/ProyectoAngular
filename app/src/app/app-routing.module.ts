import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './Componentes/empleado/empleado.component';
import { ProductoComponent } from './Componentes/producto/producto.component';
import { ServicioComponent } from './Componentes/servicio/servicio.component';
import { UsuarioComponent } from './Componentes/usuario/usuario.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path:'',component: InicioComponent},
  {path:'empleado',component: EmpleadoComponent},
  {path:'producto',component:ProductoComponent},
  {path:'servicio',component:ServicioComponent},
  {path:'usuario',component:UsuarioComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }