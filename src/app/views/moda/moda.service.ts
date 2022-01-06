import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductoInterface } from '../../core/interfaces/producto.interface';
import { ModaConstants } from './moda.constants';

@Injectable()
export class ModaService {
  
  productos: Array<ProductoInterface> = ModaConstants.PRODUCTOS;
  
  constructor(
    private httpClient: HttpClient
  ) {}
  
  obtenerProductos() {
    return this.httpClient.get<Array<ProductoInterface>>('http://localhost:3000/productos/moda');
  }
    
  obtenerProducto(idProducto: number): ProductoInterface {
    return this.productos.find((producto: ProductoInterface) => {
      return producto.idProducto === Number(idProducto);
    });
  } 
}