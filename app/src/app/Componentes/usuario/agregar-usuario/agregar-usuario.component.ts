import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  constructor(private usuarioService: UsuarioService, private activedRoute: ActivatedRoute) { }
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
      });
    }
    else{
      this.usuarioService.insertarUsuario(this.usuario).subscribe((response:any)=>{
        console.log(response);
        this.cleanFormData();
      });
    }

  }

  cleanFormData(){
    this.usuario.email ="";
    this.usuario.password = "";
    this.usuario.rol = "";
  }

}
