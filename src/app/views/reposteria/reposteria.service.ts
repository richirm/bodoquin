import { Injectable } from '@angular/core';

import { ProductoInterface } from '../../core/interfaces/producto.interface';
import { ReposteriaConstants } from './reposteria.constants';

@Injectable()
export class ReposteriaService {
  
  productos: Array<ProductoInterface> = ReposteriaConstants.PRODUCTOS;
  
  obtenerProductos() {
    return this.productos;
  }
  
}