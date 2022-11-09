import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductoInterface } from '../../../core/interfaces/producto.interface';
import { ProductosNaturalesService } from '../productos-naturales.service';

@Component({
  selector: 'bodoquin-productos-naturales-listado',
  templateUrl: './productos-naturales-listado.component.html',
  styleUrls: ['./productos-naturales-listado.component.scss']
})
export class ProductosNaturalesListadoComponent implements OnInit {

  productos: Array<ProductoInterface> = [];

  constructor(
    private productosNaturalesService: ProductosNaturalesService,
    private router: Router) {}

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.productosNaturalesService.obtenerProductos().subscribe(
      (response) => {
        this.productos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  onClickTarjeta(producto: ProductoInterface) {
    this.router.navigate(['/productos-naturales/detalle', producto.idProducto]);
  } 
}
