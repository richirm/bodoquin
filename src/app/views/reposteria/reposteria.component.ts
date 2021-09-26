import { Component, OnInit } from '@angular/core';

import { ProductoInterface } from '../../core/interfaces/producto.interface';
import { CarritoService } from '../../core/services/carrito.service';
import { ReposteriaService } from './reposteria.service';

@Component({
  selector: 'bodoquin-reposteria',
  templateUrl: './reposteria.component.html',
  styleUrls: ['./reposteria.component.scss']
})
export class ReposteriaComponent implements OnInit {
  
  productos: Array<ProductoInterface> = [];
  
  constructor(
    private carritoService: CarritoService,
    private reposteriaService: ReposteriaService) {}
    
  ngOnInit() {
    this.obtenerProductos();
  }
  
  obtenerProductos() {
    this.productos = this.reposteriaService.obtenerProductos();
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