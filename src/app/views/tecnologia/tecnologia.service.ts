import { Injectable } from '@angular/core';

import { ProductoInterface } from '../../core/interfaces/producto.interface';
import { TecnologiaConstants } from './tecnologia.constants';

@Injectable()
export class TecnologiaService {
  
  productos: Array<ProductoInterface> = TecnologiaConstants.PRODUCTOS;
  
  obtenerProductos() {
    return this.productos;
  }
  
}