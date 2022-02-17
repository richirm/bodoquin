import { Component, OnInit } from '@angular/core';

import { JugueteriaMusicaService } from './jugueteria-musica.service';
import { MusicaInterface } from './interfaces/musica.interface';

@Component({
  selector: 'bodoquin-jugueteria-musica',
  templateUrl: './jugueteria-musica.component.html',
  styleUrls: ['./jugueteria-musica.component.scss']
})
export class JugueteriaMusicaComponent implements OnInit {

  musicas: Array<MusicaInterface>;
  musica: MusicaInterface = {};
  
  constructor(
    private jugueteriaMusicaService: JugueteriaMusicaService) {}
    
  ngOnInit() {
    this.getMusicas();
  }
  
  getMusicas() {
    this.jugueteriaMusicaService.getMusicas().subscribe(
      (response) => {
        console.log(response);
        this.musicas = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  grabarMusica() {
    if(!!this.musica.idMusica) {
      //Actualizar
      this.jugueteriaMusicaService.putMusica(this.musica).subscribe(
        (response) => {
          this.getMusicas();
          this.limpiarFormulario();
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      //Crear
    this.jugueteriaMusicaService.postMusica(this.musica).subscribe(
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
    this.musica = { ...musicaSeleccionado };
  }
  
  eliminarMusica(musicaSeleccionado: MusicaInterface) {
    if(confirm('¿Esta seguro que desea eliminar?')) {
      this.jugueteriaMusicaService.deleteMusica(musicaSeleccionado.idMusica).subscribe(
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
    
    