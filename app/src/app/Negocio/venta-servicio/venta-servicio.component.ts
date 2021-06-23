import { Component, Input, OnInit } from '@angular/core';
import { Servicio } from '../../clases/servicio';

@Component({
  selector: 'app-venta-servicio',
  templateUrl: './venta-servicio.component.html',
  styleUrls: ['./venta-servicio.component.css']
})
export class VentaServicioComponent implements OnInit {

  @Input() servicio:Servicio = new Servicio();

  cantidad = 0;

  carrito ={
    cantidad:0,
    nombre:"",
    precio:0,
    imagen:"",
    id:0
  }
  constructor() { }

  ngOnInit(): void {
  }

  Comprar(servicio:Servicio){
    this.carrito.id     = servicio.id;
    this.carrito.nombre = servicio.nombre;
    this.carrito.precio = servicio.precio;
    this.carrito.imagen = servicio.imagen;
    this.carrito.cantidad = this.cantidad;
    
    if(this.cantidad > 0) {
       sessionStorage.setItem("servicio"+servicio.id,JSON.stringify(this.carrito));
    }
  }

  Agregar(){
    this.cantidad++;
  }

  Quitar(){
    this.cantidad = this.cantidad > 0 ? this.cantidad -1 : 0;
  }
}
