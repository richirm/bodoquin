import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { PersonaInterface } from '../../interfaces/Persona.interface';
import { ControlFormularioInterface } from '../../interfaces/ControlFormulario.interface';

@Component({
  selector: 'bodoquin-reposteria-servicios-asistencia',
  templateUrl: './reposteria-servicios-asistencia.component.html',
  styleUrls: ['./reposteria-servicios-asistencia.component.scss']
})
export class ReposteriaServiciosAsistenciaComponent implements OnChanges {
  
  @Input() titulo: string;
  @Input() descripcion: string;
  @Input() boton: string;
  @Input() confirmacion: string;
  @Input() mensaje: string;
  @Input() formulario: Array<ControlFormularioInterface>;
  
  @Output() onMensaje = new EventEmitter<string>();
  
  persona: PersonaInterface = {};
  
  ngOnChanges(changes) {
    console.log(changes);
    
    if(!!changes.titulo) {
      //llamar al servicio de backend que valide el titulo
    }
  }
  
  clickAcceder() {
    const estaConfirmado = confirm(this.confirmacion);
    
    if( estaConfirmado === true ) {
      console.log(this.persona);
      this.onMensaje.emit(this.mensaje);      
    }    
  }
  
}

