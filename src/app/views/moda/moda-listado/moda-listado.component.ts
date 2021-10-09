import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private modaService: ModaService,
    private router: Router) {}
    
  ngOnInit() {
    this.obtenerProductos();
  }
  
  obtenerProductos() {
    this.productos = this.modaService.obtenerProductos();
  }
    
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
  
  onClickTarjeta(producto: ProductoInterface) {
    this.router.navigate(['/moda/detalle', producto.idProducto]);
  } 
  
}