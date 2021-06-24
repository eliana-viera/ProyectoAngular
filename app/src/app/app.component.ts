import { Component } from '@angular/core';
import { LoginService } from './servicios/login.service';
import { UsuarioService } from './servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // menu = [ *****Da error al agregar el *ngIf para el login, no me permite agregar dos ng
  //   {
  //     nombre:"Inicio",
  //     enlace:"/",
  //     class:"nav-link active"
  //   },
  //   {
  //     nombre:"Usuarios",
  //     enlace:"/usuario",
  //     class:"nav-link"
  //   },
  //   {
  //     nombre:"Empleados",
  //     enlace:"/empleado",
  //     class:"nav-link"
  //   },
  //   {
  //     nombre:"Productos",
  //     enlace:"/producto",
  //     class:"nav-link"
  //   },
  //   {
  //     nombre:"Servicios",
  //     enlace:"/servicio",
  //     class:"nav-link"
  //   },
  //   {
  //     nombre:"Vender Producto",
  //     enlace:"/filtro-producto",
  //     class:"nav-link"
  //   },
  //   {
  //     nombre:"Vender Servicio",
  //     enlace:"/filtro-servicio",
  //     class:"nav-link"
  //   },
  //   {
  //     nombre:"Caja",
  //     enlace:"/caja",
  //     class:"nav-link"
  //   }
  // ]

  constructor(private rout: Router, private usuarioService: UsuarioService, public _loginService:LoginService){

  }

  ngOnInit(): void {
    this.usuarioService.getAll().subscribe((response:any)=>{
      console.log(response);
  })

  }

    logout() {
     this._loginService.logout();
     this.rout.navigate(['/login'])
    }
}



