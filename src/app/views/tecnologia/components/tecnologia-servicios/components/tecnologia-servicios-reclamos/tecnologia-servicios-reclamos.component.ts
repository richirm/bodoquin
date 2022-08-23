import { Component, Input , Output, EventEmitter } from'@angular/core';

import { ClienteInterface } from'../../interfaces/Cliente.interface';

@Component({
  selector: 'bodoquin-tecnologia-servicios-reclamos',
  templateUrl: './tecnologia-servicios-reclamos.component.html',
  styleUrls: ['./tecnologia-servicios-reclamos.component.scss']
})
export class TecnologiaServiciosReclamosComponent {

  @Input() titulo: string;
  @Input() descripcion: string;
  @Output() onMensaje = new EventEmitter<string>();

  cliente: ClienteInterface = {};
 
  clickAcceder() {
    const estaConfirmado = confirm('¿Esta seguro que desea acceder al servicios de reclamos?'); 
    
    if( estaConfirmado === true ) {
      console.log(this.cliente);
      this.onMensaje.emit('Ir al servicio de reclamos');
    }
  }
  
}