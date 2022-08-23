import { Component, Input, Output, EventEmitter } from '@angular/core';

import { SoporteInterface } from '../../interfaces/soporte.interface';

@Component({
  selector: 'bodoquin-jugueteria-servicios-soporte',
  templateUrl: './jugueteria-servicios-soporte.component.html',
  styleUrls: ['./jugueteria-servicios-soporte.component.scss'],
})
export class JugueteriaServiciosSoporteComponent {

  @Input() titulo: string;
  @Input() descripcion: string;
  @Output() onMensaje = new EventEmitter<string>();

  soporte: SoporteInterface = {};

  clickAcceder() {
    const estaConfirmado = confirm('¿Está seguro que desea acceder al servicio de soporte?');
    
    if( estaConfirmado === true) {
      console.log(this.soporte);
      this.onMensaje.emit('Ir al servicio de soporte');
    }
  }
}