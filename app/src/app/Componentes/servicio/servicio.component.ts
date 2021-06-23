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
  constructor(private servicioService: ServicioService,private _router: Router) { }

  ngOnInit(): void {
    this.servicioService.todos().subscribe(response =>{
      this.servicios = response;
      console.log(this.servicios)
    })
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
