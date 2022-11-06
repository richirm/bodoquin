import { Component, OnInit } from '@angular/core';

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
    private productosNaturalesService: ProductosNaturalesService) { }

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
}
