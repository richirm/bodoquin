import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CentrosTuristicosInterface } from './interfaces/centrosTuristicos.interface';

@Injectable()
export class JugueteriaCentrosTuristicosService {

  constructor(
    private httpClient: HttpClient) {}
  
  getCentrosTuristicos(): Observable<Array<CentrosTuristicosInterface>> {
    return this.httpClient.get<Array<CentrosTuristicosInterface>>('http://localhost:3000/cultura/centrosTuristicos?precioMin=1&precioMax=100');
  }

}