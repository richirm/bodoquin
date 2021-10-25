import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModaService } from '../moda.service';
import { ProductoInterface } from '../../../core/interfaces/producto.interface';

@Component({
  selector: 'bodoquin-moda-detalle',
  templateUrl: './moda-detalle.component.html',
  styleUrls: ['./moda-detalle.component.scss']
})
export class ModaDetalleComponent implements OnInit {
  
  producto: ProductoInterface;
  
  constructor(
    private route: ActivatedRoute,
    private modaService: ModaService) {}
    
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