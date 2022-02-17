import { Component, OnInit } from '@angular/core';

import { TecnologiaComidasService } from './tecnologia-comidas.service';
import { ComidaInterface} from './interfaces/comida.interface';

@Component({
  selector: 'bodoquin-tecnologia-comidas',
  templateUrl: './tecnologia-comidas.component.html',
  styleUrls: ['./tecnologia-comidas.component.scss']
})
export class TecnologiaComidasComponent implements OnInit {
  
  comidas: Array<ComidaInterface>;
  comida: ComidaInterface = {};
  
  constructor (
    private tecnologiaComidasService: TecnologiaComidasService) {}

  ngOnInit() {
    this.getComidas();
  }
  
  getComidas() {
    this.tecnologiaComidasService.getComidas().subscribe(
      (response) => {
        console.log(response);
        this.comidas = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }
  
  grabarComida() {
    
    if(!!this.comida.idComida) {
      this.tecnologiaComidasService.putComida(this.comida).subscribe(
        (response) => {
          this.getComidas();
          this.limpiarFormulario();
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.tecnologiaComidasService.postComida(this.comida).subscribe(
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
    this.comida =  { ...comidaSeleccionado };
  }
  
  eliminarComida(comidaSeleccionado: ComidaInterface) {
    if(confirm('¡Esta seguro que desea eliminar?')) {
      this.tecnologiaComidasService.deleteComida(comidaSeleccionado.idComida).subscribe(
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

