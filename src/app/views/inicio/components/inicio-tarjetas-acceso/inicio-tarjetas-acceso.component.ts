import { Component } from '@angular/core';

import { ModuloInterface } from './interfaces/modulo.interface';
import { InicioTarjetasAccesoConstants } from './inicio-tarjetas-acceso.constants';

@Component({
  selector: 'bodoquin-inicio-tarjetas-acceso',
  templateUrl: './inicio-tarjetas-acceso.component.html',
  styleUrls: ['./inicio-tarjetas-acceso.component.scss']
})
export class InicioTarjetasAccesoComponent {
  
  modulos: Array<ModuloInterface> = InicioTarjetasAccesoConstants.MODULOS;
}