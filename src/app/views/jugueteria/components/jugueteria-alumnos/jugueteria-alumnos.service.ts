import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AlumnoInterface } from './interfaces/alumno.interface';

@Injectable()
export class JugueteriaAlumnosService {
  
  constructor(
    private httClient: HttpClient) {}
    
  getAlumnos(): Observable<Array<AlumnoInterface>> {
    return this.httClient.get<Array<AlumnoInterface>>('http://localhost:3000/educacion/alumnos?edadMin=1&edadMax=250');
  }
  
  postAlumno(alumno: AlumnoInterface): Observable<AlumnoInterface> {
    return this.httClient.post<AlumnoInterface>('http://localhost:3000/educacion/alumno', alumno);
  }
  
  putAlumno(alumno: AlumnoInterface): Observable<AlumnoInterface> {
    return this.httClient.put<AlumnoInterface>('http://localhost:3000/educacion/alumno', alumno);
  }
  
  deleteAlumno(idAlumno: number): Observable<null> {
    return this.httClient.delete<null>(`http://localhost:3000/educacion/alumno/${idAlumno}`);
  }
}     