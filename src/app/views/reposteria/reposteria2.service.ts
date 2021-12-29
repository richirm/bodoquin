import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AlumnoInterface } from './interfaces/alumno.interface';

@Injectable()
export class Reposteria2Service {
  
  constructor( //Injección de dependencias
    private httpClient: HttpClient) {}
  
  getAlumnosCache() {
    const alumnos = [
      {
        id: 1001,
        nombre: 'Ricardo',
        apellidos: 'Rosales',
        edad: 32
      },
      {
        id: 1002,
        nombre: 'Vanessa',
        apellidos: 'Chipana',
        edad: 32
      },
      {
        id: 1003,
        nombre: 'Dani',
        apellidos: 'Rosales',
        edad: 34
      }
    ];
    
    return alumnos;
  }

  getNombreLocal(): string {
    const nombre = localStorage.getItem('nombre');
    return nombre;
  }
  
  getApellidosSession(): string {
    const apellidos = sessionStorage.getItem('apellidos');
    return apellidos;
  }
 
  getAlumnosBackend() {
    return this.httpClient.get<Array<AlumnoInterface>>('http://localhost:3000/educacion/alumnos?edadMin=1&edadMax=250');
  }
  
}