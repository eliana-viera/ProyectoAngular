export class Producto {
    id:number;
    codigo:string;
    nombre:string;
    descripcion:string;
    precio: number;
    imagen:string;

    constructor(){
      this.id = 0;
      this.codigo = "";
      this.nombre = "";
      this.descripcion = "";
      this.precio = 0;
      this.imagen = "";
    }
}
