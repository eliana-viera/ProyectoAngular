import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = "http://localhost:3000/usuario"
  

  constructor(private _http: HttpClient) {

   }

   getAll(){
     return this._http.get<Usuario[]>(this.url);
   }

   insertarUsuario(usuario:Usuario){
     return this._http.post(this.url, usuario);
   }

   eliminarUsuario(id:number){
     return this._http.delete(this.url+"/"+id);
   }

   modificarUsuario(usuario:Usuario){
     return this._http.put(this.url+"/"+ usuario.id, usuario);
   }
}
