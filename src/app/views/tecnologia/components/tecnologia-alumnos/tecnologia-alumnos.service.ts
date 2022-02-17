import { Injectable } from'@angular/core';
import { HttpClient } from'@angular/common/http';
import { Observable } from'rxjs';

import { AlumnoInterface } from'./interfaces/alumno.interface'

@Injectable()
export class TecnologiaAlumnosService {
  constructor(
    private httpClient: HttpClient) {}
    
  getAlumnos(): Observable<Array<AlumnoInterface>>{
    return this.httpClient.get<Array<AlumnoInterface>>('http://localhost:3000/educacion/alumnos?edadMin=1&edadMax=250')
  }
  
  postAlumno(alumno: AlumnoInterface): Observable<AlumnoInterface> {
    return this.httpClient.post<AlumnoInterface>('http://localhost:3000/educacion/alumno', alumno);
  }
    
  putAlumno(alumno: AlumnoInterface): Observable<AlumnoInterface> {
    return this.httpClient.put<AlumnoInterface>('http://localhost:3000/educacion/alumno', alumno);
  }
    
  deleteAlumno(idAlumno: number): Observable<null> {
    return this.httpClient.delete<null>(`http://localhost:3000/educacion/alumno/${idAlumno}`);
  }
}