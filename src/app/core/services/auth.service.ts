import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UsuarioInterface } from '../interfaces/usuario.interface';
import { IniciarSesionResponseInterface } from '../interfaces/iniciar-sesion-response.interface';

@Injectable() 
export class AuthService {
  
  constructor(
    private httpClient: HttpClient) {}
    
  iniciarSesion(params: UsuarioInterface): Observable<IniciarSesionResponseInterface> {
    return this.httpClient.post<IniciarSesionResponseInterface>('http://localhost:3000/seguridad/iniciarSesion', params);
    
  }
}