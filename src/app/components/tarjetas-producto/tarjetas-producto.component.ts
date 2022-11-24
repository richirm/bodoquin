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
 
  @Output() onClickTarjeta: EventEmitter<ProductoInterface> = new EventEmitter();
  @Output() onClickEditar: EventEmitter<ProductoInterface> = new EventEmitter();
  @Output() onClickRemove: EventEmitter<ProductoInterface> = new EventEmitter();
  
  constructor(
    private carritoService: CarritoService){}
  
  onClickAgregar(producto: ProductoInterface) {
    event.stopPropagation();
    this.carritoService.productoAgregado.emit(producto);
  }
  
  onClickSumar(producto: ProductoInterface) {
    event.stopPropagation();
    this.carritoService.productoSumado.emit(producto);
  }
  
  onClickRestar(producto: ProductoInterface) {
    event.stopPropagation();
    this.carritoService.productoRestado.emit(producto);
  }

  onClickEliminar(producto: ProductoInterface) {
    event.stopPropagation();
    this.carritoService.productoEliminado.emit(producto);
  }
  
}
