import { Component, OnInit } from '@angular/core';
import { Servicio } from '../../clases/servicio';
import { ServicioService } from '../../servicios/servicio.service';

@Component({
  selector: 'app-filtro-servicio',
  templateUrl: './filtro-servicio.component.html',
  styleUrls: ['./filtro-servicio.component.css']
})
export class FiltroServicioComponent implements OnInit {

  servicios:Servicio[] = []
  nombre = "";
  desde = 0;
  hasta = 0;
  mostrarEliminar = false;
  showJumbotron = false

  backup: Servicio[] = [];
  constructor(private servicioService: ServicioService) {

   }

  ngOnInit(): void {
    this.servicioService.todos().subscribe(response => {
      console.log("Response",response)
      this.servicios = response;
      this.backup = this.servicios;
    })
  }

  handle(){
    this.mostrarEliminar = true;
  }

  filtrar(){
    if(this.nombre.length > 0){
      let filtroServicios = this.servicios.filter(servicio =>{
        return servicio.nombre.toLowerCase() === this.nombre.toLowerCase();
      });
      this.servicios = filtroServicios;
    };

    if(this.desde > 0 && this.hasta > 0){
      let filtroServicios = this.servicios.filter(servicio =>{
        return servicio.precio >= this.desde && servicio.precio <= this.hasta;
      });
      this.servicios = filtroServicios;
  }
}

  limpiar(){
    this.mostrarEliminar = false;
    this.nombre = "",
    this.desde = 0,
    this.hasta = 0,
    this.servicios = this.backup;
  }

}
