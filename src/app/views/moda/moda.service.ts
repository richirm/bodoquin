import { Injectable } from '@angular/core';

import { ProductoInterface } from '../../core/interfaces/producto.interface';
import { ModaConstants } from './moda.constants';

@Injectable()
export class ModaService {
  
  productos: Array<ProductoInterface> = ModaConstants.PRODUCTOS;
  
  obtenerProductos(): Array<ProductoInterface> {
    return this.productos;
  }
    
  obtenerProducto(idProducto: number): ProductoInterface {
    return this.productos.find((producto: ProductoInterface) => {
      return producto.idProducto === Number(idProducto);
    });
  }
  
}