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
  constructor(private productoService: ProductoService,private _router: Router) { }

  ngOnInit(): void {
    this.productoService.getAll().subscribe(response =>{
      this.productos = response;
      console.log(this.productos)
    })
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


