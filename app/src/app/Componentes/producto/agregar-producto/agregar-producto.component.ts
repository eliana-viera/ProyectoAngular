import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/clases/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  producto: Producto = new Producto();
  constructor(private rout: Router, private productoService: ProductoService, private activedRoute: ActivatedRoute) { }
  id = 0;
  ngOnInit(): void { 
      this.activedRoute.paramMap.subscribe((item:any)=>{
        this.id = item.get('id');
        if(this.id > 0){
          this.productoService.getAll().subscribe((response:Producto[])=>{
            const item = response.filter((prod:any)=>{
              return prod.id == this.id
            })[0];
            this.producto = item;
          })
        }
      })
  }

  save(event:any)
  {
    if(this.id > 0){
      this.productoService.modificarProducto(this.producto).subscribe((response:any)=>{
        console.log(response);
        alert("Modificado con exito")
        this.rout.navigate(['/producto'])
      });
    }
    else{
      this.productoService.insertarProducto(this.producto).subscribe((response:any)=>{
        console.log(response);
        this.cleanFormData();
        alert("Agregado con exito")
        this.rout.navigate(['/producto'])
      });
    }

  }

  cleanFormData(){
    this.producto.codigo = "";
    this.producto.nombre ="";
    this.producto.precio = 0;
    this.producto.imagen = "";
    this.producto.descripcion = "";
  }
}
