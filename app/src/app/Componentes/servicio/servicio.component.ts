import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servicio } from 'src/app/clases/servicio';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  columnas = [
    '',
    'nombre',
    'descripcion',
    'precio'
  ]
  servicios: Servicio[] = []

  nombre="";
  mostrarEliminar = false;
  backup: Servicio[] = [];

  constructor(private servicioService: ServicioService,private _router: Router) { }

  ngOnInit(): void {
    this.servicioService.todos().subscribe(response =>{
      this.servicios = response;
      this.backup = this.servicios;
    })
  }

  
  buscar(){
    if(this.nombre.length > 0){
      let filtroServ= this.servicios.filter(servicio =>{
        return servicio.nombre.toLowerCase() === this.nombre.toLowerCase();
      });
      this.servicios = filtroServ;
    };
  }

  limpiar(){
    this.mostrarEliminar= false;
    this.nombre = "",
    this.servicios = this.backup;
  }

  handle(){
    this.mostrarEliminar = true;
  }

  modificarServicio(servicio:Servicio){
    this._router.navigate(["/agregar-servicio",servicio.id])
  }

  eliminarServicio(id: number){
    this.servicioService.eliminarServicio(id).subscribe((response:any)=>{
      console.log(response)
      const nuevoItem = this.servicios.filter((item:any)=>{
        return item.id !== id
      });
      this.servicios = nuevoItem;
    })
  }


}
