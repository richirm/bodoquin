import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MusicaInterface } from './interfaces/musica.interface';

@Injectable()
export class TecnologiaMusicasService {
  
  constructor(
    private httpClient: HttpClient) {}
    
  getMusicas(): Observable<Array<MusicaInterface>>{
    return this.httpClient.get<Array<MusicaInterface>>('http://localhost:3000/cultura/musicas?precioMin=1&precioMax=100')
  }
  
  postMusica(musica: MusicaInterface) :Observable<MusicaInterface> {
    return this.httpClient.post<MusicaInterface>('http://localhost:3000/cultura/musica', musica)
  }
  
  putMusica(musica: MusicaInterface): Observable<MusicaInterface> {
    return this.httpClient.put<MusicaInterface>('http://localhost:3000/cultura/musica', musica);
  }
    
  deleteMusica(idMusica: number): Observable<null> {
    return this.httpClient.delete<null>(`http://localhost:3000/cultura/musica/${idMusica}`);
  }
}