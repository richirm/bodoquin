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
  
  productos: Array<ProductoInterface> = [];
  
  username: string = '';
  nickname: string = '';
  
  constructor(
    private jugueteriaService: JugueteriaService,
    private router: Router) {}
    
  ngOnInit() {
    this.obtenerProductos();    
  }
  
  obtenerProductos() {
    this.jugueteriaService.obtenerProductos().subscribe(
      (response) => {
        this.productos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  onClickTarjeta(producto: ProductoInterface) {
    this.router.navigate(['/jugueteria/detalle', producto.idProducto]);
  } 
  
}