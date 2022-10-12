import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ControlFormularioInterface } from 'src/app/core/interfaces/control-formulario.interface';

@Injectable()
export class VideojuegosServiciosService {
  
  //Patron de injección de dependencias
  constructor(
    private httpClient: HttpClient) {}
  
  obtenerFormularioSoporte(): Observable<Array<ControlFormularioInterface>> {
    return this.httpClient.get<Array<ControlFormularioInterface>>('http://localhost:3000/productos/videojuegos/servicios/soporte/controles');
  }
  
  obtenerFormularioGarantia(): Observable<Array<ControlFormularioInterface>> {
    return this.httpClient.get<Array<ControlFormularioInterface>>('http://localhost:3000/productos/videojuegos/servicios/garantia/controles');
  }
  
}