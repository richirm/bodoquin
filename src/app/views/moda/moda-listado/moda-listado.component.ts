import { Component, OnInit } from '@angular/core';

import { ProductoInterface } from '../../../core/interfaces/producto.interface';
import { CarritoService } from '../../../core/services/carrito.service';
import { ModaService } from '../moda.service';

@Component({
  selector: 'bodoquin-moda-listado',
  templateUrl: './moda-listado.component.html',
  styleUrls: ['./moda-listado.component.scss']
})
export class ModaListadoComponent implements OnInit {
  
  productos: Array<ProductoInterface> = [];
  
  constructor(
    private carritoService: CarritoService,
    private modaService: ModaService) {}
    
  ngOnInit() {
    this.obtenerProductos();
  }
  
  obtenerProductos() {
    this.productos = this.modaService.obtenerProductos();
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