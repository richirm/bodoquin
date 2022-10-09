import { Component, OnInit } from '@angular/core';

import { ProductoInterface } from '../../../core/interfaces/producto.interface';
import { VideojuegosService } from '../videojuegos.service';

@Component({
  selector: 'bodoquin-videojuegos-listado',
  templateUrl: './videojuegos-listado.component.html',
  styleUrls: ['./videojuegos-listado.component.scss']
})
export class VideojuegosListadoComponent implements OnInit {
  
  productos: Array<ProductoInterface> = [];

  constructor(
    private videojuegosService: VideojuegosService) {}
    
  ngOnInit() {
    this.obtenerProductos();
  }
  
  obtenerProductos() {
    this.videojuegosService.obtenerProductos().subscribe(
      (response) => {
        this.productos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}