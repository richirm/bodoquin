import { Component, OnInit } from '@angular/core';

import { ControlFormularioInterface } from 'src/app/core/interfaces/control-formulario.interface';
import { VideojuegosServiciosService } from './videojuegos-servicios.service';

@Component({
  selector: 'bodoquin-videojuegos-servicios',
  templateUrl: './videojuegos-servicios.component.html',
  styleUrls: ['./videojuegos-servicios.component.scss']
})
export class VideojuegosServiciosComponent implements OnInit {

  formularioSoporte: Array<ControlFormularioInterface>;
  formularioGarantia: Array<ControlFormularioInterface>;

  constructor(
    private videojuegosServiciosService: VideojuegosServiciosService) {}

  ngOnInit() {
    this.obtenerFormularioSoporte();
    this.obtenerFormularioGarantia();
  }
  
  obtenerFormularioSoporte() {
    // Patron observador
    this.videojuegosServiciosService.obtenerFormularioSoporte().subscribe(
      (response) => {
        this.formularioSoporte = response;
      },
      (error) => {
        alert('Ha ocurrido un error en el formulario de soporte');
      }    
    );
  }
  
  obtenerFormularioGarantia() { 
    // Patron observador
    this.videojuegosServiciosService.obtenerFormularioGarantia().subscribe(
      (response) => {
        this.formularioGarantia = response;
      },
      (error) => {
        alert('Ha ocurrido un error en el formulario de garantia');
      }    
    );
  }

}
