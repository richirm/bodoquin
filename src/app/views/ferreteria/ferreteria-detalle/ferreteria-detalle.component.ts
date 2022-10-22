import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FerreteriaService } from '../ferreteria.service';
import { ProductoInterface } from '../../../core/interfaces/producto.interface';

@Component({
  selector: 'bodoquin-ferreteria-detalle',
  templateUrl: './ferreteria-detalle.component.html',
  styleUrls: ['./ferreteria-detalle.component.scss']
})
export class FerreteriaDetalleComponent implements OnInit {

  producto: ProductoInterface;

  constructor(
    private route: ActivatedRoute,
    private ferreteriaService: FerreteriaService) {}

  ngOnInit() {
    this.getInfoProducto();
  }
  
  getInfoProducto() {
    const idProducto = this.route.snapshot.params.idProducto;
    
    this.ferreteriaService.obtenerProducto(idProducto).subscribe(
      (response) => {
        this.producto = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
