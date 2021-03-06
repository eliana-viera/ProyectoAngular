import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../clases/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {     

  url = "http://localhost:3000/producto"
  

  constructor(private _http: HttpClient) {

   }

   getAll(){
     return this._http.get<Producto[]>(this.url);
   }

   insertarProducto(producto:Producto){
     return this._http.post(this.url,producto);
   }

   eliminarProducto(id:number){
     return this._http.delete(this.url+"/"+id);
   }

   modificarProducto(producto:Producto){
     return this._http.put(this.url+"/"+producto.id,producto);
   }
}
