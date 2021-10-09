import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private jugueteriaService: JugueteriaService,
    private router: Router) {}
    
  ngOnInit() {
    this.obtenerProductos();    
  }
  
  obtenerProductos() {
    this.productos = this.jugueteriaService.obtenerProductos();
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