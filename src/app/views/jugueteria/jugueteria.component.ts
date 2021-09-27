import { Component } from '@angular/core';

import { ProductoInterface } from '../../core/interfaces/producto.interface';
import { CarritoService } from '../../core/services/carrito.service';
import { JugueteriaService } from './jugueteria.service';

@Component({
  selector: 'bodoquin-jugueteria',
  templateUrl: './jugueteria.component.html',
  styleUrls: ['./jugueteria.component.scss']
})
export class JugueteriaComponent implements OnInit {
  
  productos : Array<ProductoInterface> = [];
  
  constructor(
    private carritoService: CarritoService,
    private jugueteriaService: JugueteriaService) {}
    
  ngOnInit() {
    this.obtenerProductos();    
  }
  
  obtenerProductos() {
    this.productos = this.jugueteriaService.obtenerProductos();
  }
    
  onClickAgregar(producto: ProductoInterface) {
    this.carritoService.productoAgregado.emit(producto);
  }
  
  onClickSumar(producto: ProductoInterface) {
    this.carritoService.productoSumado.emit(producto);
  }
  
  onClickRestar(producto: ProductoInterface) {
    this.carritoService.productoRestado.emit(producto);
  }
  
  onClickEliminar(producto: ProductoInterface) {
    this.carritoService.productoEliminado.emit(producto);
  }
  
}