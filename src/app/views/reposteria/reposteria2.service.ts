import { Injectable } from '@angular/core';

@Injectable()
export class Reposteria2Service {
  
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

  getNombreLocal() {
    const nombre = localStorage.getItem('nombre');
    return nombre;
  }
  
  getApellidosSession() {
    const apellidos = sessionStorage.getItem('apellidos');
    return apellidos;
  }
 
  // getAlumnosBackend() {
    
  // }
  
}