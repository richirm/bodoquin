import { Injectable, EventEmitter } from '@angular/core';

import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable()
export class CarritoService {
  
  productoAgregado: EventEmitter<ProductoInterface> = new EventEmitter();  
  productoSumado: EventEmitter<ProductoInterface> = new EventEmitter();    
  productoRestado: EventEmitter<ProductoInterface> = new EventEmitter();  
  
}
