import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Servicio } from 'src/app/clases/servicio';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-servicio',
  templateUrl: './agregar-servicio.component.html',
  styleUrls: ['./agregar-servicio.component.css']
})
export class AgregarServicioComponent implements OnInit {

  servicio: Servicio = new Servicio();
  constructor(private rout: Router, private servicioService: ServicioService, private activedRoute: ActivatedRoute) { }
  id = 0;
  ngOnInit(): void { 
      this.activedRoute.paramMap.subscribe((item:any)=>{
        this.id = item.get('id');
        if(this.id > 0){
          this.servicioService.todos().subscribe((response:Servicio[])=>{
            const item = response.filter((ser:any)=>{
              return ser.id == this.id
            })[0];
            this.servicio = item;
          })
        }
      })
  }

  save(event:any)
  {
    if(this.id > 0){
      this.servicioService.modificarServicio(this.servicio).subscribe((response:any)=>{
        console.log(response);
        alert("Modificado con éxito")
        this.rout.navigate(['/servicio'])
      });
    }
    else{
      this.servicioService.insertarServicio(this.servicio).subscribe((response:any)=>{
        console.log(response);
        this.cleanFormData();
        alert("Agregado con éxito")
        this.rout.navigate(['/servicio'])
      });
    }

  }

  cleanFormData(){
    this.servicio.nombre ="";
    this.servicio.precio = 0;
    this.servicio.imagen = "";
    this.servicio.descripcion = "";
  }

}
