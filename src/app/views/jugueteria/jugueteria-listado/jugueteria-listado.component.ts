import { Component, OnInit } from '@angular/core';

import { ProductoInterface } from '../../../core/interfaces/producto.interface';
import { CarritoService } from '../../../core/services/carrito.service';
import { JugueteriaService } from '../jugueteria.service';

@Component({
  selector: 'bodoquin-jugueteria-listado',
  templateUrl: './jugueteria-listado.component.html',
  styleUrls: ['./jugueteria-listado.component.scss']
})
export class JugueteriaListadoComponent implements OnInit {
  
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