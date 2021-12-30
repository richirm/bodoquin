import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductoInterface } from '../../core/interfaces/producto.interface';
import { ReposteriaConstants } from './reposteria.constants';

@Injectable()
export class ReposteriaService {
  
  productos: Array<ProductoInterface> = ReposteriaConstants.PRODUCTOS;
  
  constructor(
    private httpClient: HttpClient) {}
  
  obtenerProductos() {
    return this.httpClient.get<Array<ProductoInterface>>('http://localhost:3000/productos/reposteria');
  }
  
  obtenerProducto(idProducto: number): ProductoInterface {
    return this.productos.find((producto: ProductoInterface) => {
      return producto.idProducto === Number(idProducto);
    });
  }
  
}