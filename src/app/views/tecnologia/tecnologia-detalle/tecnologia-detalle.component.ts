import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TecnologiaService } from '../tecnologia.service';
import { ProductoInterface } from '../../../core/interfaces/producto.interface';

@Component({
  selector: 'bodoquin-tecnologia-detalle',
  templateUrl: './tecnologia-detalle.component.html',
  styleUrls: ['./tecnologia-detalle.component.scss']
})
export class TecnologiaDetalleComponent implements OnInit {
  
  producto: ProductoInterface;
  
  constructor(
    private route: ActivatedRoute,
    private tecnologiaService: TecnologiaService) {}
    
  ngOnInit() {
    this.getInfoProducto();
  }
  
  getInfoProducto() {
    // Capturar el id de la url => Ok
    const idProducto = this.route.snapshot.params.idProducto;
    
    // Obtener la información del producto de acuerdo a su id => Ok
    this.producto = this.tecnologiaService.obtenerProducto(idProducto);
  }
  
}