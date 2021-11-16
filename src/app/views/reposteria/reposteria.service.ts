import { Injectable } from '@angular/core';

import { ProductoInterface } from '../../core/interfaces/producto.interface';
import { ReposteriaConstants } from './reposteria.constants';

@Injectable()
export class ReposteriaService {
  
  productos: Array<ProductoInterface> = ReposteriaConstants.PRODUCTOS;
  
  obtenerProductos(): Array<ProductoInterface> {
    return this.productos;
  }
  
  obtenerProducto(idProducto: number): ProductoInterface {
    return this.productos.find((producto: ProductoInterface) => {
      return producto.idProducto === Number(idProducto);
    });
  }
  
}