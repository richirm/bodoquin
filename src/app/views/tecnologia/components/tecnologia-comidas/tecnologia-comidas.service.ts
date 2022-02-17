import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ComidaInterface } from './interfaces/comida.interface';

@Injectable()
export class TecnologiaComidasService {

  constructor(
    private httpClient: HttpClient) {}
    
  getComidas(): Observable<Array<ComidaInterface>>{
    return this.httpClient.get<Array<ComidaInterface>>('http://localhost:3000/cultura/comidas?precioMin=1&precioMax=100')
  }
    
  postComida(comida: ComidaInterface): Observable<ComidaInterface> {
    return this.httpClient.post<ComidaInterface>('http://localhost:3000/cultura/comida', comida);
  }
    
  putComida(comida: ComidaInterface): Observable<ComidaInterface> {
    return this.httpClient.put<ComidaInterface>('http://localhost:3000/cultura/comida', comida);
  }
    
  deleteComida(idComida: number): Observable<null> {
    return this.httpClient.delete<null>(`http://localhost:3000/cultura/comida/${idComida}`);
  }
}