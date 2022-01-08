import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductoInterface } from '../../core/interfaces/producto.interface';

@Injectable()
export class ModaService {
  
  constructor(
    private httpClient: HttpClient) {}
  
  obtenerProductos(): Observable<Array<ProductoInterface>> {
    return this.httpClient.get<Array<ProductoInterface>>('http://localhost:3000/productos/moda');
  }
    
  obtenerProducto(idProducto: number): Observable<ProductoInterface> {
    return this.httpClient.get<ProductoInterface>(`http://localhost:3000/productos/reposteria/${idProducto}`);
  }
} 