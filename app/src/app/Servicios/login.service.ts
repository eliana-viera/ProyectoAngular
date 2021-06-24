import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:3000/usuario"

  private logueado:boolean = false;
  constructor(private rout: Router, private usuarioService: UsuarioService) {
  }
  

  login(user:any){
    this.usuarioService.getAll().subscribe((response:any)=>{
      const data = response;
      let filter = response.filter(item=>{
        return item.email === user.email && item.password === user.password
      });
      
      if (filter.length > 0){
        this.logueado = true;
        let user = {"user" : filter[0]}
        localStorage.setItem("user",JSON.stringify(user));
        this.rout.navigate(['/'])
      }
    });
  }

  estaLogueado(){
   let user = JSON.parse(localStorage.getItem("user"));
   if (user != null){
     return user;
   }
   return 0;
  }

  getUser(){
    return this.estaLogueado() != 0 ? this.estaLogueado().user.rol : "default";   
  }

  logout(){
    localStorage.removeItem("user")
  }
}
