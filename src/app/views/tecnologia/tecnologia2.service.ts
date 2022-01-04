import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ComidaInterface } from './interfaces/comida.interface';
import { CursoInterface } from './interfaces/curso.interface';

@Injectable()
export class Tecnologia2Service {
  
  constructor( 
    private httpClient: HttpClient) {}
	
  getComidasCache() {
    const comidas = [
      {
        id: 1001,
        nombre: 'cebiche',
        ingrediente: 'pescado',
        precio: 65
      },
      {
        id: 1002,
        nombre: 'chaufa',
        ingrediente: 'pollo',
        precio: 18
      },
      {
        id: 1003,
        nombre: 'tallarines rojos',
        ingrediente: 'fideos',
        precio: 15
      }
    ];
    
    return comidas;
  }

  getNombreLocal(): string {
    const nombre = localStorage.getItem('nombre');
    return nombre;
  }
  
  getIngredienteSession(): string {
    const ingrediente = sessionStorage.getItem('ingrediente');
    return ingrediente;
  }
 
  getComidasBackend() {
    return this.httpClient.get<Array<ComidaInterface>>('http://localhost:3000/cultura/comidas?precioMin=1&precioMax=100');
  }
  
  getCursosBackend() {
    return this.httpClient.get<Array<CursoInterface>>('http://localhost:3000/educacion/cursos');
  }
  
}