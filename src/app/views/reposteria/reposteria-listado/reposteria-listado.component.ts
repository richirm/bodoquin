import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductoInterface } from '../../../core/interfaces/producto.interface';
import { ReposteriaService } from '../reposteria.service';

@Component({
  selector: 'bodoquin-reposteria-listado',
  templateUrl: './reposteria-listado.component.html',
  styleUrls: ['./reposteria-listado.component.scss']
})
export class ReposteriaListadoComponent implements OnInit {
  
  productos: Array<ProductoInterface> = [];
  
  username: string = '';
  nickname: string = '';
  
  constructor(
    private reposteriaService: ReposteriaService,
    private router: Router) {}
    
  ngOnInit() {
    this.obtenerProductos();
  }
  
  obtenerProductos() {
    this.reposteriaService.obtenerProductos().subscribe(
      (response) => {
        this.productos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  onClickTarjeta(producto: ProductoInterface) {
    this.router.navigate(['/reposteria/detalle', producto.idProducto]);
  } 
  
}