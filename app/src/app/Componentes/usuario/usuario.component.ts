import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  columnas = [
    'email',
    'contraseña',
    'rol'
  ]

  usuarios: Usuario[] = []
  email = ""
  mostrarEliminar = false
  backup : Usuario[] = []

  constructor(private usuarioService: UsuarioService,private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.getAll().subscribe(response =>{
      this.usuarios = response;
      this.backup = this.usuarios;
    })
  }

  buscar(){
    if(this.email.length > 0){
      let filtroUsu = this.usuarios.filter(empleado =>{
        return empleado.email.toLowerCase() === this.email.toLowerCase();
      });
      this.usuarios= filtroUsu;
    };
  }

  limpiar(){
    this.mostrarEliminar= false;
    this.email = "",
    this.usuarios = this.backup;
  }

  handle(){
    this.mostrarEliminar = true;
  }
  modificarUsuario(usuario:Usuario){
    this.router.navigate(["/agregar-usuario",usuario.id])
  }

  eliminarUsuario(id: number){
    this.usuarioService.eliminarUsuario(id).subscribe((response:any)=>{
      console.log(response)
      const nuevoItems = this.usuarios.filter((item:any)=>{
        return item.id !== id
      });
      this.usuarios = nuevoItems;
    })
  }
}
