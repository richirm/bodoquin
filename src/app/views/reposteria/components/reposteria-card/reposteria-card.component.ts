import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bodoquin-reposteria-card',
  templateUrl: './reposteria-card.component.html',
  styleUrls: ['./reposteria-card.component.scss']
})
export class ReposteriaCardComponent {
  
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