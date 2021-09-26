import { Injectable } from '@angular/core';

import { ProductoInterface } from '../../core/interfaces/producto.interface';
import { ModaConstants } from './moda.constants';

@Injectable()
export class ModaService {
  
  productos: Array<ProductoInterface> = ModaConstants.PRODUCTOS;
  
  obtenerProductos() {
    return this.productos;
  }
  
}