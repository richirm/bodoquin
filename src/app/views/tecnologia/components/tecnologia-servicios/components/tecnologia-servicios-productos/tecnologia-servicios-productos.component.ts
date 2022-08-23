import { Component, Input , Output, EventEmitter } from'@angular/core';

import { ProductoInterface } from'../../interfaces/Producto.interface';

@Component({
  selector: 'bodoquin-tecnologia-servicios-productos',
  templateUrl: './tecnologia-servicios-productos.component.html',
  styleUrls: ['./tecnologia-servicios-productos.component.scss']
})
export class TecnologiaServiciosProductosComponent {

  @Input() titulo: string;
  @Input() descripcion: string;
  @Output() onMensaje = new EventEmitter<string>();

  producto: ProductoInterface = {};
  
  clickAcceder() {
    const estaConfirmado = confirm('¿Esta seguro que desea acceder al servicios de productos?'); 
    
    if( estaConfirmado === true ) {
      console.log(this.producto);
      this.onMensaje.emit('Ir al servicio de productos');
    }
  }

}