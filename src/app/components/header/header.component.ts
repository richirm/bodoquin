import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bodoquin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() edad: Number;
  @Input() titulo: String;
  
  @Output() onClickTitle: EventEmitter<String> = new EventEmitter();
  
  nombre: String = 'Juanito';
  
  clicTitulo() {
    this.onClickTitle.emit('Hizo clic al H3! ' + this.titulo + this.nombre + this.edad);
  }
}