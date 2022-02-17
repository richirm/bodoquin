import { Component, OnInit } from '@angular/core';

import { ReposteriaAlumnosService } from './reposteria-alumnos.service';
import { AlumnoInterface } from './interfaces/alumno.interface';

@Component({ // Patron decorador
  selector: 'bodoquin-reposteria-alumnos',
  templateUrl: './reposteria-alumnos.component.html',
  styleUrls: ['./reposteria-alumnos.component.scss']
})
export class ReposteriaAlumnosComponent implements OnInit {
  
  alumnos: Array<AlumnoInterface>;
  alumno: AlumnoInterface = {};

  constructor( // Patron injección de dependencias
    private reposteriaAlumnosService: ReposteriaAlumnosService) {}

  ngOnInit() {
    this.getAlumnos();
  }
  
  getAlumnos() {
    // Patron observador
    this.reposteriaAlumnosService.getAlumnos().subscribe(
      (response) => {
        console.log(response);
        this.alumnos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  grabarAlumno() {
    if(!!this.alumno.idAlumno) {
      //Actualizar
      this.reposteriaAlumnosService.putAlumno(this.alumno).subscribe(
        (response) => {
          this.getAlumnos();
          this.limpiarFormulario();
        },
        (error) => {
          console.log(error);
        }
      );
    } else {    
      //Crear
      this.reposteriaAlumnosService.postAlumno(this.alumno).subscribe(
        (response) => {
          this.getAlumnos();
          this.limpiarFormulario();          
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  
  seleccionarAlumno(alumnoSeleccionado: AlumnoInterface) {
    this.alumno = { ...alumnoSeleccionado };
  }
  
  eliminarAlumno(alumnoSeleccionado: AlumnoInterface) {
    if(confirm('¿Está seguro que desea eliminar?')) {      
      this.reposteriaAlumnosService.deleteAlumno(alumnoSeleccionado.idAlumno).subscribe(
        (response) => {
          this.getAlumnos();
          this.limpiarFormulario(); 
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  
  limpiarFormulario() {
    this.alumno = {};
  }
  
}