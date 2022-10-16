import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  
  canActivate(): boolean {
    const puedeEntrar: boolean = !!localStorage.getItem('token');
    
    if(puedeEntrar === false) {
      alert('Usted no tiene los permisos para ingresar');
    }
    //llamar a un endpoint valide si el token está expirado
    
    return puedeEntrar;
  }
  
  canDeactivate(): boolean {
    const quiereSalir: boolean = confirm('¿Está seguro que desea salir?, puede perder su información no guarda');
    
    return quiereSalir;
  }
  
}