import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductoInterface } from '../../core/interfaces/producto.interface';

@Injectable()
export class TecnologiaService {
  
  constructor(
    private httpClient: HttpClient
  ) {}
  
  obtenerProductos() {
    return this.httpClient.get<Array<ProductoInterface>>('http://localhost:3000/productos/tecnologia');
  }
    
  obtenerProducto(idProducto: number): Observable<ProductoInterface> {
    return this.httpClient.get<ProductoInterface>(`http://localhost:3000/productos/tecnologia/${idProducto}`);
  }
 } 