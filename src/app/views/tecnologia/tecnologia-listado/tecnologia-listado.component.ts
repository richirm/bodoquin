import { Component, OnInit } from '@angular/core';

import { ProductoInterface } from '../../../core/interfaces/producto.interface';
import { CarritoService } from '../../../core/services/carrito.service';
import { TecnologiaService } from '../tecnologia.service';

@Component({
  selector: 'bodoquin-tecnologia-listado',
  templateUrl: './tecnologia-listado.component.html',
  styleUrls: ['./tecnologia-listado.component.scss']
})
export class TecnologiaListadoComponent implements OnInit {
  
  productos: Array<ProductoInterface> = [];
  
  constructor(
    private carritoService: CarritoService,
    private tecnologiaService: TecnologiaService) {}
    
  ngOnInit() {
    this.obtenerProductos();
  }
  
  obtenerProductos() {
    this.productos = this.tecnologiaService.obtenerProductos();
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