import { Component } from '@angular/core';

import { OfertaHoyInterface } from './interfaces/oferta-hoy.interface';
import { InicioOfertaHoyConstants } from './inicio-oferta-hoy.constants';

@Component({
  selector: 'bodoquin-inicio-oferta-hoy',
  templateUrl: './inicio-oferta-hoy.component.html',
  styleUrls: ['./inicio-oferta-hoy.component.scss']
})
export class InicioOfertaHoyComponent {
  ofertaHoy: OfertaHoyInterface = InicioOfertaHoyConstants.OFERTA;
  
  mostrarOferta: boolean = true;
  
  ocultarOfertaHoy() {
    this.mostrarOferta = false;
  }
}