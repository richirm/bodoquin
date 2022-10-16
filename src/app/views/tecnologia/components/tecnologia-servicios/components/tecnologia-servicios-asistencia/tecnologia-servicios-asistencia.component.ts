import { Component, Input , Output, EventEmitter } from'@angular/core';

import { PersonaInterface } from'../../interfaces/Persona.interface';
import { ControlFormularioInterface } from'../../interfaces/ControlFormulario.interface';

@Component({
  selector: 'bodoquin-tecnologia-servicios-asistencia',
  templateUrl: './tecnologia-servicios-asistencia.component.html',
  styleUrls: ['./tecnologia-servicios-asistencia.component.scss']
})
export class TecnologiaServiciosAsistenciaComponent {

  @Input() confirmacion: string;
  @Input() mensaje: string;
  @Input() titulo: string;
  @Input() descripcion: string;
  @Input() boton: string;
  @Input() formulario: Array<ControlFormularioInterface>;
   
  @Output() onMensaje = new EventEmitter<string>();

  @Input() persona: PersonaInterface = {};
  
  clickAcceder() {
    const estaConfirmado = confirm(this.confirmacion); 
    
    if( estaConfirmado === true ) {
      console.log(this.persona);
      this.onMensaje.emit(this.mensaje);
    }
  }
  
}