import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PersonaInterface } from '../../interfaces/persona.interface';
import { ControlFormularioInterface } from '../../interfaces/controlFormulario.interface';

@Component({
  selector: 'bodoquin-jugueteria-servicios-asistencia',
  templateUrl: './jugueteria-servicios-asistencia.component.html',
  styleUrls: ['./jugueteria-servicios-asistencia.component.scss'],
})
export class JugueteriaServiciosAsistenciaComponent {

  @Input() titulo: string;
  @Input() descripcion: string;
  @Input() boton: string;
  @Input() confirmacion: string;
  @Input() mensaje: string;
  @Input() formulario: Array<ControlFormularioInterface>;
  
  @Output() onMensaje = new EventEmitter<string>();

  persona: PersonaInterface = {};
  
  clickAcceder() {
    const estaConfirmado = confirm(this.confirmacion);
    
    if( estaConfirmado === true) {
      console.log(this.persona);
      this.onMensaje.emit(this.mensaje)
    }
  }
}