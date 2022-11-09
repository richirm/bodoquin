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

  producto: ProductoInterface;

  constructor(
    private route: ActivatedRoute,
    private productosNaturalesService: ProductosNaturalesService) {}

  ngOnInit() {
    this.getInfoProducto();
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

