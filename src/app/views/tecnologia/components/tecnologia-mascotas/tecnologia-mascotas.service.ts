import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MascotaInterface } from './interfaces/mascota.interface';

@Injectable()
export class TecnologiaMascotasService {

  constructor(
    private httpClient: HttpClient) {}
    
  getMascotas(): Observable<Array<MascotaInterface>>{
    return this.httpClient.get<Array<MascotaInterface>>('http://localhost:3000/animales/mascotas')
  }
  postMascota(mascota: MascotaInterface) :Observable<MascotaInterface> {
    return this.httpClient.post<MascotaInterface>('http://localhost:3000/animales/mascotas', mascota)
  }
  
  putMascota(mascota: MascotaInterface): Observable<MascotaInterface> {
    return this.httpClient.put<MascotaInterface>('http://localhost:3000/animales/mascotas', mascota);
  }
    
  deleteMascota(idMascota: number): Observable<null> {
    return this.httpClient.delete<null>(`http://localhost:3000/animales/mascota/${idMascota}`);
  }
}