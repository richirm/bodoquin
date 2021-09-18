import { Injectable } from '@angular/core';

@Injectable()
export class CarritoService {
  
  agregarProducto(nombre: string) {
    alert('Hola ' + nombre);
  }
  
}
