import { Component, OnInit } from '@angular/core';

import { JugueteriaComidasService } from './jugueteria-comidas.service';
import { ComidaInterface } from './interfaces/comida.interface';

@Component({
  selector: 'bodoquin-jugueteria-comidas',
  templateUrl: './jugueteria-comidas.component.html',
  styleUrls: ['./jugueteria-comidas.component.scss']
})

export class JugueteriaComidasComponent implements OnInit {

  comidas: Array<ComidaInterface>;
  comida: ComidaInterface = {};
  
  constructor(
    private JugueteriaComidasService: JugueteriaComidasService) {}
    
  ngOnInit() {
    this.getComidas();
  }
  
  getComidas() {
    this.JugueteriaComidasService.getComidas().subscribe(
      (response) => {
        console.log(response);
        this.comidas = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  grabarComida() {
    if(!!this.comida.idComida) {
      //Actualizar
      this.JugueteriaComidasService.putComida(this.comida).subscribe(
        (response) => {
          this.getComidas();
          this.limpiarFormulario();
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      //Crear
    this.JugueteriaComidasService.postComida(this.comida).subscribe(
      (response) => {
        this.getComidas();
        this.limpiarFormulario();
      },
      (error) => {
        console.log(error);
      }
    );  
   }
  }
  seleccionarComida(comidaSeleccionado: ComidaInterface) {
    this.comida = { ...comidaSeleccionado };
  }
  
  eliminarComida(comidaSeleccionado: ComidaInterface) {
    if(confirm('¿Esta seguro que desea eliminar?')) {
      this.JugueteriaComidasService.deleteComida(comidaSeleccionado.idComida).subscribe(
        (response) => {
          this.getComidas();
          this.limpiarFormulario();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  
  limpiarFormulario() {
    this.comida = {};
  }

}