import { Component, OnInit } from '@angular/core';

import { ControlFormularioInterface } from 'src/app/core/interfaces/control-formulario.interface';
import { FerreteriaServiciosService } from './ferreteria-servicios.service';

@Component({
  selector: 'bodoquin-ferreteria-servicios',
  templateUrl: './ferreteria-servicios.component.html',
  styleUrls: ['./ferreteria-servicios.component.scss']
})
export class FerreteriaServiciosComponent implements OnInit {

  formularioSoporte: Array<ControlFormularioInterface>;

  constructor(
    private ferreteriaServiciosService: FerreteriaServiciosService) {}

  ngOnInit() {
    this.obtenerFormularioSoporte();
  }
  
  obtenerFormularioSoporte() {
    this.ferreteriaServiciosService.obtenerFormularioSoporte().subscribe(
      (response) => {
        this.formularioSoporte = response;
      },
      (error) => {
        alert('Ha ocurrido un error en el formulario de soporte');
      }    
    );
  }
}
