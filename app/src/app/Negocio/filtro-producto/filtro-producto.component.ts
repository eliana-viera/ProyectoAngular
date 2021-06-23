import { Component, OnInit } from '@angular/core';
import { Producto } from '../../clases/producto';
import { ProductoService } from '../../servicios/producto.service';

@Component({
  selector: 'app-filtro-producto',
  templateUrl: './filtro-producto.component.html',
  styleUrls: ['./filtro-producto.component.css']
})
export class FiltroProductoComponent implements OnInit {

  productos:Producto[] = []
  codigo = "";
  desde = 0;
  hasta = 0;
  mostrarEliminar = false;
  showJumbotron = false

  backup: Producto[] = [];
  constructor(private productoService: ProductoService) {

   }

  ngOnInit(): void {
    this.productoService.getAll().subscribe(response => {
      console.log("Response",response)
      this.productos = response;
      this.backup = this.productos;
    })
  }

  handle(){
    this.mostrarEliminar = true;
  }

  filtrar(){

    if(this.codigo.length > 0){
      let filtroProducto = this.productos.filter(producto =>{
        return producto.codigo.toLowerCase() === this.codigo.toLowerCase();
      });
      this.productos = filtroProducto;
    };

    if(this.desde > 0 && this.hasta > 0){
      let filtroProducto = this.productos.filter(producto =>{
        return producto.precio >= this.desde && producto.precio <= this.hasta;
      });
      this.productos = filtroProducto;
  }
}

  limpiar(){
    this.mostrarEliminar= false;
    this.codigo = "",
    this.desde = 0,
    this.hasta = 0,
    this.productos = this.backup;
  }
}
