import { Injectable } from '@angular/core';

import { ProductoInterface } from '../../core/interfaces/producto.interface';
import { JugueteriaConstants } from './jugueteria.constants';

@Injectable()
export class JugueteriaService {
  
  productos: Array<ProductoInterface> = JugueteriaConstants.PRODUCTOS;
  
  obtenerProductos(): Array<ProductoInterface> {
    return this.productos;
  }

  obtenerProducto(idProducto: number): ProductoInterface {
    return this.productos.find((producto: ProductoInterface) => {
      return producto.idProducto === Number(idProducto);
    });
  }
  
}