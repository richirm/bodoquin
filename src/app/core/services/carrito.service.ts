import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CarritoService {
  nombreSeleccionado: EventEmitter<string> = new EventEmitter();
  
  agregarProducto(nombre: string) {
    alert('Hola ' + nombre);
  }
  
}
