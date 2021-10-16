import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JugueteriaService } from '../jugueteria.service';
import { ProductoInterface } from '../../../core/interfaces/producto.interface';
import { CarritoService } from '../../../core/services/carrito.service';

@Component({
  selector: 'bodoquin-jugueteria-detalle',
  templateUrl: './jugueteria-detalle.component.html',
  styleUrls: ['./jugueteria-detalle.component.scss']
})
export class JugueteriaDetalleComponent implements OnInit {

  producto: ProductoInterface;

  constructor(
    private route: ActivatedRoute,
    private jugueteriaService: JugueteriaService,
    private carritoService: CarritoService) {}

  ngOnInit() {
    this.getInfoProducto();
  }

  getInfoProducto() {
    // Capturar el id de la url
    const idProducto = this.route.snapshot.params.idProducto;
    console.log(idProducto);

    // Obtener la información del producto de acuerdo a su id
    this.producto = this.jugueteriaService.obtenerProducto(idProducto);
    console.log(this.producto);

    // mostrar el producto en el html

    // colocar el diseño de la vista de detalle

    // integrarnos al componente de carrito

    // componente de tabs
  }
  
  sumarProducto() {
    this.carritoService.productoSumado.emit(this.producto);
  }

  restarProducto() {
    this.carritoService.productoRestado.emit(this.producto);
  }
  
}
