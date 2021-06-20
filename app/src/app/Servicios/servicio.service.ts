import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../clases/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  url = "http://localhost:3000/servicio"
  

  constructor(private _http: HttpClient) {

   }

   getAll(){
     return this._http.get<Servicio[]>(this.url);
   }

   insertarServicio(servicio:Servicio){
     return this._http.post(this.url,servicio);
   }

   eliminarServicio(id:number){
     return this._http.delete(this.url+"/"+id);
   }

   modificarServicio(servicio:Servicio){
     return this._http.put(this.url+"/"+ servicio.id, servicio);
   }
}
