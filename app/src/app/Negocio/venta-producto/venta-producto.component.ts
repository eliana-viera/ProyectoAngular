import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../clases/producto';


@Component({
  selector: 'app-venta-producto',
  templateUrl: './venta-producto.component.html',
  styleUrls: ['./venta-producto.component.css']
})
export class VentaProductoComponent implements OnInit {

  @Input() producto:Producto = new Producto();
  cantidad = 0;
  carrito ={
    cantidad:0,
    codigo:"",
    nombre:"",
    precio:0,
    imagen:"",
    id:0
  }
  constructor() { }

  ngOnInit(): void {
  }

  Comprar(producto:Producto){
    this.carrito.id = producto.id;
    this.carrito.nombre = producto.nombre;
    this.carrito.codigo = producto.codigo;
    this.carrito.precio = producto.precio;
    this.carrito.imagen = producto.imagen;
    this.carrito.cantidad = this.cantidad;
    
    if(this.cantidad > 0) {
      sessionStorage.setItem("producto"+producto.id,JSON.stringify(this.carrito));
   }
    
  }

  Agregar(){
    this.cantidad++;

  }

  Quitar(){
    this.cantidad = this.cantidad > 0 ? this.cantidad -1 : 0;
  }

}
