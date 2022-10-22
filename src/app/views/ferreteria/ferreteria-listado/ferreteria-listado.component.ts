import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductoInterface } from '../../../core/interfaces/producto.interface';
import { FerreteriaService } from '../ferreteria.service';

@Component({
  selector: 'bodoquin-ferreteria-listado',
  templateUrl: './ferreteria-listado.component.html',
  styleUrls: ['./ferreteria-listado.component.scss']
})
export class FerreteriaListadoComponent implements OnInit {

  productos: Array<ProductoInterface> = [];

  constructor(
    private ferreteriaService: FerreteriaService,
    private router: Router) {}

  ngOnInit() {
    this.obtenerProductos();
  }
  
  obtenerProductos() {
    this.ferreteriaService.obtenerProductos().subscribe(
      (response) => {
        this.productos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  onClickTarjeta(producto: ProductoInterface) {
    this.router.navigate(['/ferreteria/detalle', producto.idProducto]);
  } 

}
