import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductoInterface } from '../../core/interfaces/producto.interface';

@Injectable()
export class ReposteriaService {
    
  constructor(
    private httpClient: HttpClient) {}
  
  obtenerProductos(): Observable<Array<ProductoInterface>> {
    return this.httpClient.get<Array<ProductoInterface>>('http://localhost:3000/productos/reposteria');
  }
  
  obtenerProducto(idProducto: number): Observable<ProductoInterface> {
    return this.httpClient.get<ProductoInterface>(`http://localhost:3000/productos/reposteria/${idProducto}`);
  }
  
  grabarProducto(producto: ProductoInterface): Observable<ProductoInterface> {
    return this.httpClient.post<ProductoInterface>(`http://localhost:3000/productos/reposteria`, producto);
  }
  
}