import { Component, OnInit } from '@angular/core';

import { ProductoInterface } from '../../../core/interfaces/producto.interface';
import { ProductosNaturalesService } from '../productos-naturales.service';

@Component({
  selector: 'bodoquin-productos-naturales-listado',
  templateUrl: './productos-naturales-listado.component.html',
  styleUrls: ['./productos-naturales-listado.component.scss']
})
export class ProductosNaturalesListadoComponent implements OnInit {

  productos: Array<ProductoInterface> = [
    {
      idProducto: 100,
      nombreImg: "una-de-gato.jpg",
      nombreCategoria: "plantas",
      nombreProducto: "uña de gato",
      descripcionProducto: "producto natural para resolver problemas gastricos",
      precioProducto: 299,
      cantidadProducto: 0,
      especificaciones: ""
    },
    {
      idProducto: 101,
      nombreImg: "chancapiedra.jpg",
      nombreCategoria: "plantas",
      nombreProducto: "chanca piedra",
      descripcionProducto: "producto natural para resolver problemas renales",
      precioProducto: 25,
      cantidadProducto: 0,
      especificaciones: ""
    }
  ];

  constructor(
    private productosNaturalesService: ProductosNaturalesService) { }

  ngOnInit() {
    // this.obtenerProductos();
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
