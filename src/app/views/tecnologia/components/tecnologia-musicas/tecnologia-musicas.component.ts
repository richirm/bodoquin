import { Component, OnInit } from '@angular/core';

import { TecnologiaMusicasService } from './tecnologia-musicas.service';
import { MusicaInterface } from './interfaces/musica.interface';

@Component ({
  selector: 'bodoquin-tecnologia-musicas',
  templateUrl: './tecnologia-musicas.component.html',
  styleUrls: ['./tecnologia-musicas.component.scss']
})
export class TecnologiaMusicasComponent implements OnInit {
  
  musicas: Array<MusicaInterface>;
  musica: MusicaInterface = {};
  
  constructor (
    private tecnologiaMusicasService: TecnologiaMusicasService) {}

  ngOnInit() {
    this.getMusicas();
  }
  
  getMusicas() {
    this.tecnologiaMusicasService.getMusicas().subscribe(
      (response) => {
        console.log(response);
        this.musicas = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }
  
  grabarMusica() {
    if(!!this.musica.idMusica) {
      this.tecnologiaMusicasService.putMusica(this.musica).subscribe(
        (response) => {
          this.getMusicas();
          this.limpiarFormulario();
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.tecnologiaMusicasService.postMusica(this.musica).subscribe(
        (response) => {
          this.getMusicas();
          this.limpiarFormulario();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  
  seleccionarMusica(musicaSeleccionado: MusicaInterface) {
    this.musica =  { ...musicaSeleccionado };
  }
  
  eliminarMusica(musicaSeleccionado: MusicaInterface) {
    if(confirm('¡Esta seguro que desea eliminar?')) {
      this.tecnologiaMusicasService.deleteMusica(musicaSeleccionado.idMusica).subscribe(
        (response) => {
          this.getMusicas();
          this.limpiarFormulario();
        },
        (error) => {
          console.log(error);
        }        
      );
    }
  }

  limpiarFormulario() {
  this.musica = {};
  }
}