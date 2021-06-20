import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../clases/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  url = "http://localhost:3000/empleado"
  

  constructor(private _http: HttpClient) {

   }

   getAll(){
     return this._http.get<Empleado[]>(this.url);
   }

   insertarEmpleado(empleado:Empleado){
     return this._http.post(this.url, empleado);
   }

   eliminarEmpleado(id:number){
     return this._http.delete(this.url+"/"+id);
   }

   modificarEmpleado(empleado:Empleado){
     return this._http.put(this.url+"/"+ empleado.id, empleado);
   }
}
