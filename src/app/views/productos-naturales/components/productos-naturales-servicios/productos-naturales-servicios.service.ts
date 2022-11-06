import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ControlFormularioInterface } from 'src/app/core/interfaces/control-formulario.interface';

@Injectable()
export class ProductosNaturalesServiciosService {

  constructor(
    private httpClient: HttpClient) {}
    
  obtenerFormularioSoporte(): Observable<Array<ControlFormularioInterface>> {
    return this.httpClient.get<Array<ControlFormularioInterface>>('...');
  }
  
}
