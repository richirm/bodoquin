import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ControlFormularioInterface } from './interfaces/ControlFormulario.interface';

@Injectable()
export class ReposteriaServiciosService {
  
  //Patron de injección de dependencias
  constructor(
    private httpClient: HttpClient) {}
  
  obtenerFormularioAsistencia(): Observable<Array<ControlFormularioInterface>> {
    return this.httpClient.get<Array<ControlFormularioInterface>>('http://localhost:3000/productos/reposteria/servicios/asistencia/controles');
  }
  
}