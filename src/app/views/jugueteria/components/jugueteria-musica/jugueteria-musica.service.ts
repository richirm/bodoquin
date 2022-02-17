import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MusicaInterface } from './interfaces/musica.interface';

@Injectable()
export class JugueteriaMusicaService {
  
  constructor(
    private httClient: HttpClient) {}
    
  getMusicas(): Observable<Array<MusicaInterface>> {
    return this.httClient.get<Array<MusicaInterface>>('http://localhost:3000/cultura/musicas?precioMin=1&precioMax=100');
  }
  
  postMusica(musica: MusicaInterface): Observable<MusicaInterface> {
    return this.httClient.post<MusicaInterface>('http://localhost:3000/cultura/musica', musica);
  }
  
  putMusica(musica: MusicaInterface): Observable<MusicaInterface> {
    return this.httClient.put<MusicaInterface>('http://localhost:3000/cultura/musica', musica);
  }
  
  deleteMusica(idMusica: number): Observable<null> {
    return this.httClient.delete<null>(`http://localhost:3000/cultura/musica/${idMusica}`);
  }
}     
