import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ReposteriaService } from '../reposteria.service';
import { ProductoInterface } from '../../../core/interfaces/producto.interface';

@Component({
  selector: 'bodoquin-reposteria-detalle',
  templateUrl: './reposteria-detalle.component.html',
  styleUrls: ['./reposteria-detalle.component.scss']
})
export class ReposteriaDetalleComponent implements OnInit {
  
  producto: ProductoInterface;
  
  constructor(
    private route: ActivatedRoute,
    private reposteriaService: ReposteriaService) {}
    
  ngOnInit() {
    this.getInfoProducto();
  }
  
  getInfoProducto() {
    // Capturar el id de la url => Ok
    const idProducto = this.route.snapshot.params.idProducto;
    
    // Obtener la información del producto de acuerdo a su id => Ok
    this.producto = this.reposteriaService.obtenerProducto(idProducto);
  }
  
}