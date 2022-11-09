import { Component, OnInit } from '@angular/core';

import { ControlFormularioInterface } from 'src/app/core/interfaces/control-formulario.interface';
import { ProductosNaturalesServiciosService } from './productos-naturales-servicios.service';

@Component({
  selector: 'bodoquin-productos-naturales-servicios',
  templateUrl: './productos-naturales-servicios.component.html',
  styleUrls: ['./productos-naturales-servicios.component.scss']
})
export class ProductosNaturalesServiciosComponent implements OnInit {

  formularioSoporte: Array<ControlFormularioInterface>;

  constructor(
    private productosNaturalesServiciosService: ProductosNaturalesServiciosService) {}

  ngOnInit() {
    this.obtenerFormularioSoporte();
  }
  
  obtenerFormularioSoporte() {
    // Patron observador
    this.productosNaturalesServiciosService.obtenerFormularioSoporte().subscribe(
      (response) => {
        this.formularioSoporte = response;
      },
      (error) => {
        alert('Ha ocurrido un error en el formulario de soporte');
      }    
    );
  }
}
