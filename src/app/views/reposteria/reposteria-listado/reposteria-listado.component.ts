import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductoInterface } from '../../../core/interfaces/producto.interface';
import { CarritoService } from '../../../core/services/carrito.service';
import { ReposteriaService } from '../reposteria.service';

@Component({
  selector: 'bodoquin-reposteria-listado',
  templateUrl: './reposteria-listado.component.html',
  styleUrls: ['./reposteria-listado.component.scss']
})
export class ReposteriaListadoComponent implements OnInit {
  
  productos: Array<ProductoInterface> = [];
  
  constructor(
    private carritoService: CarritoService,
    private reposteriaService: ReposteriaService,
    private router: Router) {}
    
  ngOnInit() {
    this.obtenerProductos();
  }
  
  obtenerProductos() {
    this.productos = this.reposteriaService.obtenerProductos();
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
    this.router.navigate(['/reposteria/detalle', producto.idProducto]);
  } 
  
}