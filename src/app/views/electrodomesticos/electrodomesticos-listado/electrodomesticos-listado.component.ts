import { Component, OnInit } from '@angular/core';

import { ProductoInterface } from '../../../core/interfaces/producto.interface';
import { ElectrodomesticosService } from '../electrodomesticos.service';

@Component({
  selector: 'bodoquin-electrodomesticos-listado',
  templateUrl: './electrodomesticos-listado.component.html',
  styleUrls: ['./electrodomesticos-listado.component.scss']
})
export class ElectrodomesticosListadoComponent implements OnInit {

  productos: Array<ProductoInterface> = [];

  constructor(
    private electrodomesticosService: ElectrodomesticosService) {}

  ngOnInit() {
    this.obtenerProductos();
  }
  
  obtenerProductos() {
    this.electrodomesticosService.obtenerProductos().subscribe(
      (response) => {
        this.productos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
