import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CursoInterface } from './interfaces/curso.interface';

@Injectable()
export class ReposteriaCursosService {
  
  constructor(
    private httpClient: HttpClient) {}
    
  getCursos(): Observable<Array<CursoInterface>> {
    return this.httpClient.get<Array<CursoInterface>>('http://localhost:3000/educacion/cursos');
  }
  
}