import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { VideojuegosService } from '../videojuegos.service';
import { ProductoInterface } from '../../../core/interfaces/producto.interface';

@Component({
  selector: 'bodoquin-videojuegos-detalle',
  templateUrl: './videojuegos-detalle.component.html',
  styleUrls: ['./videojuegos-detalle.component.scss']
})
export class VideojuegosDetalleComponent implements OnInit {

  producto: ProductoInterface;
  
  constructor(
    private route: ActivatedRoute,
    private videojuegosService: VideojuegosService) {}
    
  ngOnInit() {
    this.getInfoProducto();
  }
  
  getInfoProducto() {
    // Capturar el id de la url => Ok
    const idProducto = this.route.snapshot.params.idProducto;
    
    // Obtener la información del producto de acuerdo a su id => Ok
    this.videojuegosService.obtenerProducto(idProducto).subscribe(
      (response) => {
        this.producto = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}