import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ControlFormularioInterface } from './interfaces/ControlFormulario.interface';

@Injectable()
export class JugueteriaServiciosService {
  
  //Patron de injeccion de dependencias
  constructor(
    private httClient: HttpClient) {}
    
  obtenerFormularioAsistencia(): Observable<Array<ControlFormularioInterface>> {
    return this.httClient.get<Array<ControlFormularioInterface>>('http://localhost:3000/productos/jugueteria/servicios/asistencia/controles');
  }    
  
  obtenerFormularioAverias(): Observable<Array<ControlFormularioInterface>> {
    return this.httClient.get<Array<ControlFormularioInterface>>('http://localhost:3000/productos/jugueteria/servicios/averias/controles');
  }  
  
  obtenerFormularioArtefactos(): Observable<Array<ControlFormularioInterface>> {
    return this.httClient.get<Array<ControlFormularioInterface>>('http://localhost:3000/productos/jugueteria/servicios/artefactos/controles');
  }
    
}