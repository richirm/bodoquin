import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductoInterface } from '../../../core/interfaces/producto.interface';
import { ModaService } from '../moda.service';

@Component({
  selector: 'bodoquin-moda-listado',
  templateUrl: './moda-listado.component.html',
  styleUrls: ['./moda-listado.component.scss']
})
export class ModaListadoComponent implements OnInit {
  
  productos: Array<ProductoInterface> = [];
  
  constructor(
    private modaService: ModaService,
    private router: Router) {}
    
  ngOnInit() {
    this.obtenerProductos();
  }
  
  obtenerProductos() {
    this.productos = this.modaService.obtenerProductos();
  }
  
  onClickTarjeta(producto: ProductoInterface) {
    this.router.navigate(['/moda/detalle', producto.idProducto]);
  } 
  
}