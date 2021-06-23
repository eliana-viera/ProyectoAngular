import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {

  columnas = [
  '',
  'Nombre',
  'Cantidad',
  'Codigo',
  'Precio',
  ''
]

cambioDebe = 'cambio'

total = 0;
cambio = 0;
monto = 0;
productos: string[] = []
carritoProductos : any = []
constructor() { }

ngOnInit(): void {
  this.productos = Object.keys(sessionStorage);
  this.productos.forEach((el:any)  => {
    const item = sessionStorage.getItem(el);

    if (item != null) {
      let object = JSON.parse(item);
      this.carritoProductos.push(JSON.parse(item));
      this.total += object.cantidad * object.precio
    }

  });
}

manejoCambio(){
  this.cambio = this.monto - this.total;
  this.cambioDebe = this.cambio >= 0 ? "cambio" : "debe";
}

change(event:any){
    console.log(event.target.value)
}

sumar(producto:any){
  let temp = this.carritoProductos.map((el: any)=>{
    if (el.id === producto.id){
      el.cantidad++;
      this.total += el.precio;
      return el
    }
    else{
      return el;
    }
  });
  this.carritoProductos = temp;
}

restar(producto:any){
  if(producto.cantidad === 1){
    let borrar = this.carritoProductos.filter((element:any)=>{
      return element.id !== producto.id
    })
    this.total -= producto.precio
    this.carritoProductos = borrar;
  }
  else{
    let temp = this.carritoProductos.map((element: any)=>{
    if (element.id === producto.id){
      element.cantidad--;
        this.total -= element.precio;
        return element;
    }
    else{
      return element;
    }
  });

  this.carritoProductos = temp;
  }

}

finalizarCompra(){
  this.cambioDebe = 'cambio'

  this.total = 0;
  this.cambio = 0;
  this.monto = 0;
  this.carritoProductos = [];

  this.productos.forEach((el:any)  => {
    sessionStorage.removeItem(el);
  });
  this.productos = [];

}

eliminarItem(producto: any){
    sessionStorage.removeItem("producto"+producto.id);
    const newItems = this.carritoProductos.filter((item:any)=>{
      return item.id !== producto.id
    });
    this.carritoProductos = newItems;

    this.total -= producto.cantidad * producto.precio;
}


}
