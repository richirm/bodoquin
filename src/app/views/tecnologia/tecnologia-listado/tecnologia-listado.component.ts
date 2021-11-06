import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private tecnologiaService: TecnologiaService,
    private router: Router) {}
    
  ngOnInit() {
    this.obtenerProductos();
  }
  
  obtenerProductos() {
    this.productos = this.tecnologiaService.obtenerProductos();
  }

  onClickEliminar(producto: ProductoInterface) {
    event.stopPropagation();
    this.carritoService.productoEliminado.emit(producto);
  }
  
  onClickTarjeta(producto: ProductoInterface) {
    this.router.navigate(['/tecnologia/detalle', producto.idProducto]);
  } 
  
}