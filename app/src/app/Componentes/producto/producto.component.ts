import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/clases/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  columnas = [
    '',
    'nombre',
    'codigo',
    'descripcion',
    'precio'
  ]
  productos: Producto[] = []
  nombre="";
  mostrarEliminar = false;
  backup: Producto[] = [];

  constructor(private productoService: ProductoService,private _router: Router) { }

  ngOnInit(): void {
    this.productoService.getAll().subscribe(response =>{
      this.productos = response;
      this.backup = this.productos;
    })
  }

  buscar(){
    if(this.nombre.length > 0){
      let filtroProducto = this.productos.filter(producto =>{
        return producto.nombre.toLowerCase().includes(this.nombre.toLowerCase());
      });
      this.productos = filtroProducto;
    };
  }

  limpiar(){
    this.mostrarEliminar= false;
    this.nombre = "",
    this.productos = this.backup;
  }

  handle(){
    this.mostrarEliminar = true;
  }

  modificarProducto(producto:Producto){
    this._router.navigate(["/agregar-producto",producto.id])
  }

  eliminarProducto(id: number){
    this.productoService.eliminarProducto(id).subscribe((response:any)=>{
      console.log(response)
      const nuevoItems = this.productos.filter((item:any)=>{
        return item.id !== id
      });
      this.productos = nuevoItems;
    })
  }

  }


