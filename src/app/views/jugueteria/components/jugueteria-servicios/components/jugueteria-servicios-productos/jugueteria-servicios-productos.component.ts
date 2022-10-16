import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ProductoInterface } from '../../interfaces/producto.interface';

@Component({
  selector: 'bodoquin-jugueteria-servicios-productos',
  templateUrl: './jugueteria-servicios-productos.component.html',
  styleUrls: ['./jugueteria-servicios-productos.component.scss'],
})
export class JugueteriaServiciosProductosComponent {

  @Input() titulo: string;
  @Input() descripcion: string;
  @Output() onMensaje = new EventEmitter<string>();
  
  contructor() {}

  producto: ProductoInterface = {};

  clickAcceder() {
    const estaConfirmado = confirm('¿Está seguro que desea acceder al servicio de producto?');
    
    if( estaConfirmado === true) {
      console.log(this.producto);
      this.onMensaje.emit('Ir al servicio de producto general');
    }
  }

}