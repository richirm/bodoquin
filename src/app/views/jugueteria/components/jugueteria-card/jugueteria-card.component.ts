import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector:'bodoquin-jugueteria-card',
  templateUrl: './jugueteria-card.component.html',
  styleUrls: ['./jugueteria-card.component.scss']
})
export class JugueteriaCardComponent {

  @Input() titulo: string;
  @Input() valor: string;
  @Input() descripcion: string;
  
  @Output() clickEditar: EventEmitter<null> = new EventEmitter();
  @Output() clickEliminar: EventEmitter<null> = new EventEmitter();
  
  seleccionarItem() {
    this.clickEditar.emit();
  }
  
  eliminarItem () {
    this.clickEliminar.emit();
  }
  
}
  
  
  