import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductoInterface } from '../../../core/interfaces/producto.interface';
import { JugueteriaService } from '../jugueteria.service';

@Component({
  selector: 'bodoquin-jugueteria-listado',
  templateUrl: './jugueteria-listado.component.html',
  styleUrls: ['./jugueteria-listado.component.scss']
})
export class JugueteriaListadoComponent implements OnInit {
  
  productos : Array<ProductoInterface> = [];
  
  constructor(
    private jugueteriaService: JugueteriaService,
    private router: Router) {}
    
  ngOnInit() {
    this.obtenerProductos();    
  }
  
  obtenerProductos() {
    this.productos = this.jugueteriaService.obtenerProductos();
  }
  
  onClickTarjeta(producto: ProductoInterface) {
    this.router.navigate(['/jugueteria/detalle', producto.idProducto]);
  } 
  
}