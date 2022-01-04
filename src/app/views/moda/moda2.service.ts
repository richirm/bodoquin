import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MascotaInterface } from './interfaces/mascota.interface';

@Injectable()
export class Moda2Service {
  
  constructor( 
    private httpClient: HttpClient) {}
	
  getLibrosCache() {
    const libros = [
      {
        id: 1001,
        nombre: 'perros de la calle',
        genero: 'thriller',
        ranking: 3
      },
      {
        id: 1002,
        nombre: 'hombre lobo',
        genero: 'terror',
        ranking: 2
      },
      {
        id: 1003,
        nombre: 'no se lo digas a nadie',
        genero: 'novelas',
        ranking: 1
      }
    ];
    
    return libros;
  }

  getNombreLocal() {
    const nombre = localStorage.getItem('nombreLibro');
    return nombre;
  }
  
  getLibrosGeneroSession() {
    const genero = sessionStorage.getItem('genero');
    return genero;
  }
 
  getMascotasBackend() {
    return this.httpClient.get<Array<MascotaInterface>>('http://localhost:3000/animales/mascotas');
  }
  
}