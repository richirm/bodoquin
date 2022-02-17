import { Component, Input, Output, EventEmitter } from'@angular/core'

@Component({
  selector: 'bodoquin-tecnologia-card',
  templateUrl: './tecnologia-card.component.html',
  styleUrls: ['./tecnologia-card.component.scss']
})
export class TecnologiaCardComponent {
  @Input() titulo: string;
  @Input() valor: string;
  @Input() descripcion: string;
  
  @Output() clickEditar: EventEmitter<null> = new EventEmitter();
  @Output() clickEliminar: EventEmitter<null> = new EventEmitter();
  
  seleccionarItem() {
    this.clickEditar.emit();
  }
  
  eliminarItem() {
    this.clickEliminar.emit();
  }
}