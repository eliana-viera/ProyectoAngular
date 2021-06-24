import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/clases/empleado';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  columnas = [
    'nombre',
    'edad',
    'cargo'
  ]
  empleados: Empleado[] = []
  nombre = ""
  mostrarEliminar = false
  backup : Empleado[] = []

  constructor(private empleadoService: EmpleadoService,private router: Router) { }

  ngOnInit(): void {
    this.empleadoService.getAll().subscribe(response =>{
      this.empleados = response;
      this.backup = this.empleados;
    })
  }

  buscar(){
    if(this.nombre.length > 0){
      let filtroEmp = this.empleados.filter(empleado =>{
        return empleado.nombre.toLowerCase() === this.nombre.toLowerCase();
      });
      this.empleados = filtroEmp;
    };
  }

  limpiar(){
    this.mostrarEliminar= false;
    this.nombre = "",
    this.empleados = this.backup;
  }

  handle(){
    this.mostrarEliminar = true;
  }

  modificarEmpleado(empleado:Empleado){
    this.router.navigate(["/agregar-empleado",empleado.id])
  }

  eliminarEmpleado(id: number){
    this.empleadoService.eliminarEmpleado(id).subscribe((response:any)=>{
      console.log(response)
      const nuevoItems = this.empleados.filter((item:any)=>{
        return item.id !== id
      });
      this.empleados = nuevoItems;
    })
  }

}
