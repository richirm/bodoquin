import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductosNaturalesService } from '../productos-naturales.service';
import { ProductoInterface } from '../../../core/interfaces/producto.interface';

@Component({
  selector: 'bodoquin-productos-naturales-detalle',
  templateUrl: './productos-naturales-detalle.component.html',
  styleUrls: ['./productos-naturales-detalle.component.scss']
})
export class ProductosNaturalesDetalleComponent implements OnInit {

  producto: ProductoInterface = {
    idProducto: 1,
    nombreImg: "una-de-gato.jpg",
    nombreCategoria: "plantas",
    nombreProducto: "Uña de gato",
    descripcionProducto: "Planta medicinal para problemas digestivos",
    precioProducto: 59,
    cantidadProducto: 0,
    especificaciones: "Fecha de produccion: 01/05/2018|Elaborado por: naturales.",
  };

  constructor(
    private route: ActivatedRoute,
    private productosNaturalesService: ProductosNaturalesService) {}

  ngOnInit() {
    // this.getInfoProducto();
  }

  getInfoProducto() {
    // Capturar el id de la url => Ok
    const idProducto = this.route.snapshot.params.idProducto;
    
    // Obtener la información del producto de acuerdo a su id => Ok
    this.productosNaturalesService.obtenerProducto(idProducto).subscribe(
      (response) => {
        this.producto = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

