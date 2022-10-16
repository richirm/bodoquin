import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ControlFormularioInterface } from './interfaces/ControlFormulario.interface';

@Injectable()
export class TecnologiaServiciosService {

  constructor(
    private httpClient: HttpClient) {}
    
  obtenerFormularioAsistencia(): Observable<Array<ControlFormularioInterface>>{
    return this.httpClient.get<Array<ControlFormularioInterface>>('http://localhost:3000/productos/tecnologia/servicios/asistencia/controles')
  }
  
  obtenerFormularioSoporte(): Observable<Array<ControlFormularioInterface>>{
    return this.httpClient.get<Array<ControlFormularioInterface>>('http://localhost:3000/productos/tecnologia/servicios/soporte/controles')
  }
  
  obtenerFormularioReparacion(): Observable<Array<ControlFormularioInterface>>{
    return this.httpClient.get<Array<ControlFormularioInterface>>('http://localhost:3000/productos/tecnologia/servicios/reparacion/controles')
  }
  
}