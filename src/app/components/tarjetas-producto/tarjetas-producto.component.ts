import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ProductoInterface } from '../../core/interfaces/producto.interface';
import { CarritoService } from '../../core/services/carrito.service';

@Component({
  selector: 'bodoquin-tarjetas-producto',
  templateUrl: './tarjetas-producto.component.html',
  styleUrls: ['./tarjetas-producto.component.scss']
})
export class TarjetasProductoComponent {
  @Input() productos: Array<ProductoInterface>;
  @Input() fondo: string;
  
  @Output() onClickSumar: EventEmitter<ProductoInterface> = new EventEmitter();
  @Output() onClickRestar: EventEmitter<ProductoInterface> = new EventEmitter();
  @Output() onClickEliminar: EventEmitter<ProductoInterface> = new EventEmitter();
  @Output() onClickTarjeta: EventEmitter<ProductoInterface> = new EventEmitter();
  
  constructor(
    private carritoService: CarritoService){}
  
  onClickAgregar(producto: ProductoInterface) {
    event.stopPropagation();
    this.carritoService.productoAgregado.emit(producto);
  }

}
