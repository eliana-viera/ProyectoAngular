import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  menu = [
    {
      nombre:"Inicio",
      enlace:"/",
      class:"nav-link active"
    },
    {
      nombre:"Usuarios",
      enlace:"/usuario",
      class:"nav-link"
    },
    {
      nombre:"Empleados",
      enlace:"/empleado",
      class:"nav-link"
    },
    {
      nombre:"Productos",
      enlace:"/producto",
      class:"nav-link"
    },
    {
      nombre:"Servicios",
      enlace:"/servicio",
      class:"nav-link"
    }
  ]
}

