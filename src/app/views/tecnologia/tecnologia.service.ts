import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProductoInterface } from '../../core/interfaces/producto.interface';
import { TecnologiaConstants } from './tecnologia.constants';

@Injectable()
export class TecnologiaService {
  
  productos: Array<ProductoInterface> = TecnologiaConstants.PRODUCTOS;
  
  constructor(
    private httpClient: HttpClient
  ) {}
  
  obtenerProductos() {
    return this.httpClient.get<Array<ProductoInterface>>('http://localhost:3000/productos/tecnologia');
  }
    
  obtenerProducto(idProducto: number): ProductoInterface {
    return this.productos.find((producto: ProductoInterface) => {
      return producto.idProducto === Number(idProducto);
    });
  }
  
}