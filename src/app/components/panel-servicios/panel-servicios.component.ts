import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { ControlFormularioInterface } from 'src/app/core/interfaces/control-formulario.interface';

@Component({
  selector: 'bodoquin-panel-servicios',
  templateUrl: './panel-servicios.component.html',
  styleUrls: ['./panel-servicios.component.scss']
})
export class PanelServiciosComponent implements OnChanges {
  
  @Input() titulo: string;
  @Input() descripcion: string;
  @Input() boton: string;
  @Input() confirmacion: string;
  @Input() mensaje: string;
  @Input() controles: Array<ControlFormularioInterface>;
  
  @Output() onMensaje = new EventEmitter<string>();
  
  formulario = {};
  
  ngOnChanges(changes) {
    console.log(changes);
    
    if(!!changes.titulo) {
      //llamar al servicio de backend que valide el titulo
    }
  }
  
  clickAcceder() {
    const estaConfirmado = confirm(this.confirmacion);
    
    if( estaConfirmado === true ) {
      console.log(this.formulario);
      this.onMensaje.emit(this.mensaje);      
    }    
  }
  
}

