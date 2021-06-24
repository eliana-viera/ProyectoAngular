import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/clases/empleado';
import { EmpleadoService } from 'src/app/servicios/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {
  empleado: Empleado = new Empleado();
  constructor(private rout: Router, private empleadoService: EmpleadoService, private activedRoute: ActivatedRoute) { }
  
  id = 0;
  ngOnInit(): void { 
      this.activedRoute.paramMap.subscribe((item:any)=>{
        this.id = item.get('id');
        if(this.id > 0){
          this.empleadoService.getAll().subscribe((response:Empleado[])=>{
            const item = response.filter((emp:any)=>{
              return emp.id == this.id
            })[0];
            this.empleado = item;
          })
        }
      })
  }

  save(event:any)
  {
    if(this.id > 0){
      this.empleadoService.modificarEmpleado(this.empleado).subscribe((response:any)=>{
        console.log(response);
        alert("Modificado con éxito")
        this.rout.navigate(['/empleado'])
      });
    }
    else{
      this.empleadoService.insertarEmpleado(this.empleado).subscribe((response:any)=>{
        console.log(response);
        this.cleanFormData();
        alert("Agregado con éxito")
        this.rout.navigate(['/empleado'])
      });
    }

  }

  cleanFormData(){
    this.empleado.nombre ="";
    this.empleado.edad= 0;
    this.empleado.cargo = "";
  }

}
