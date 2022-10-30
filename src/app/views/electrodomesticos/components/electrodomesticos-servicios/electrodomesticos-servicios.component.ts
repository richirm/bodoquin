import { Component, OnInit } from '@angular/core';

import { ControlFormularioInterface } from 'src/app/core/interfaces/control-formulario.interface';
import { ElectrodomesticosServiciosService } from './electrodomesticos-servicios.service';

@Component({
  selector: 'bodoquin-electrodomesticos-servicios',
  templateUrl: './electrodomesticos-servicios.component.html',
  styleUrls: ['./electrodomesticos-servicios.component.scss']
})
export class ElectrodomesticosServiciosComponent implements OnInit {

  formularioSoporte: Array<ControlFormularioInterface>;
  formularioGarantia: Array<ControlFormularioInterface>;

  constructor(
    private electrodomesticosServiciosService: ElectrodomesticosServiciosService) { }

  ngOnInit() {
    this.obtenerFormularioSoporte();
    this.obtenerFormularioGarantia();
  }
  
  obtenerFormularioSoporte() {
    this.electrodomesticosServiciosService.obtenerFormularioSoporte().subscribe(
      (response) => {
        this.formularioSoporte = response;
      },
      (error) => {
        alert('Ha ocurrido un error en el formulario de soporte');
      }    
    );
  }
  
  obtenerFormularioGarantia() { 
    this.electrodomesticosServiciosService.obtenerFormularioGarantia().subscribe(
      (response) => {
        this.formularioGarantia = response;
      },
      (error) => {
        alert('Ha ocurrido un error en el formulario de garantia');
      }    
    );
  }
}
