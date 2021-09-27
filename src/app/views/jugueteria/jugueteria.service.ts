import { Injectable } from '@angular/core';

import { ProductoInterface } from '../../core/interfaces/producto.interface';
import { JugueteriaConstants } from './jugueteria.constants';

@Injectable()
export class JugueteriaService {
  
  productos: Array<ProductoInterface> = JugueteriaConstants.PRODUCTOS;
  
  obtenerProductos() {
    return this.productos;
  }
  
}