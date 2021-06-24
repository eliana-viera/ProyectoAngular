import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  constructor(private rout: Router, private usuarioService: UsuarioService, private activedRoute: ActivatedRoute) { }
  id = 0;
  ngOnInit(): void { 
      this.activedRoute.paramMap.subscribe((item:any)=>{
        this.id = item.get('id');
        if(this.id > 0){
          this.usuarioService.getAll().subscribe((response:Usuario[])=>{
            const item = response.filter((usu:any)=>{
              return usu.id == this.id
            })[0];
            this.usuario = item;
          })
        }
      })
  }

  save(event:any)
  {
    if(this.id > 0){
      this.usuarioService.modificarUsuario(this.usuario).subscribe((response:any)=>{
        console.log(response);
        alert("Modificado con éxito")
        this.rout.navigate(['/usuario'])
      });
    }
    else{
      this.usuarioService.insertarUsuario(this.usuario).subscribe((response:any)=>{
        console.log(response);
        this.cleanFormData();
        alert("Agregado con éxito")
        this.rout.navigate(['/usuario'])
      });
    }

  }

  cleanFormData(){
    this.usuario.email ="";
    this.usuario.password = "";
    this.usuario.rol = "";
  }

}
