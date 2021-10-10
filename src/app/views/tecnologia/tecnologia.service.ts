import { Injectable } from '@angular/core';

import { ProductoInterface } from '../../core/interfaces/producto.interface';
import { TecnologiaConstants } from './tecnologia.constants';

@Injectable()
export class TecnologiaService {
  
  productos: Array<ProductoInterface> = TecnologiaConstants.PRODUCTOS;
  
  obtenerProductos(): Array<ProductoInterface> {
    return this.productos;
  }
    
  obtenerProducto(idProducto: number): ProductoInterface {
    return this.productos.find((producto: ProductoInterface) => {
      return producto.idProducto === Number(idProducto);
    });
  }
  
}