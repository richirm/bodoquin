import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JugueteriaService } from '../jugueteria.service';
import { ProductoInterface } from '../../../core/interfaces/producto.interface';

@Component({
  selector: 'bodoquin-jugueteria-detalle',
  templateUrl: './jugueteria-detalle.component.html',
  styleUrls: ['./jugueteria-detalle.component.scss']
})
export class JugueteriaDetalleComponent implements OnInit {

  producto: ProductoInterface;

  constructor(
    private route: ActivatedRoute,
    private jugueteriaService: JugueteriaService) {}

  ngOnInit() {
    this.getInfoProducto();
  }

  getInfoProducto() {
    // Capturar el id de la url
    const idProducto = this.route.snapshot.params.idProducto;

    // Obtener la información del producto de acuerdo a su id
    this.producto = this.jugueteriaService.obtenerProducto(idProducto);
  }
 
}
