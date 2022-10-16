import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductoInterface } from '../../../core/interfaces/producto.interface';
import { TecnologiaService } from '../tecnologia.service';

@Component({
  selector: 'bodoquin-tecnologia-listado',
  templateUrl: './tecnologia-listado.component.html',
  styleUrls: ['./tecnologia-listado.component.scss']
})
export class TecnologiaListadoComponent implements OnInit {
  
  productos: Array<ProductoInterface> = [];
  
  username: string = '';
  nickname: string = '';
  
  constructor(
    private tecnologiaService: TecnologiaService,
    private router: Router) {}
    
  ngOnInit() {
    this.obtenerProductos();
  }
  
  obtenerProductos() {
    this.tecnologiaService.obtenerProductos().subscribe(
      (response) => {
        this.productos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  onClickTarjeta(producto: ProductoInterface) {
    this.router.navigate(['/tecnologia/detalle', producto.idProducto]);
  } 
  
}