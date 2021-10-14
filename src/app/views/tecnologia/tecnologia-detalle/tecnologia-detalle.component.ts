import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TecnologiaService } from '../tecnologia.service';
import { ProductoInterface } from '../../../core/interfaces/producto.interface';
import { CarritoService } from '../../../core/services/carrito.service';


@Component({
  selector: 'bodoquin-tecnologia-detalle',
  templateUrl: './tecnologia-detalle.component.html',
  styleUrls: ['./tecnologia-detalle.component.scss']
})
export class TecnologiaDetalleComponent implements OnInit {
   
  producto: ProductoInterface;
  
  constructor(
    private route: ActivatedRoute,
    private tecnologiaService: TecnologiaService,
    private carritoService: CarritoService) {}
    
  ngOnInit() {
    this.getInfoProducto();
  }
  
  getInfoProducto() {
    // Capturar el id de la url
    const idProducto = this.route.snapshot.params.idProducto;
    console.log(idProducto);
    
    // Obtener la información del producto de acuerdo a su id
    this.producto = this.tecnologiaService.obtenerProducto(idProducto);
    console.log(this.producto);
    
    // mostrar el producto en el html
    
    // colocar el diseño de la vista de detalle
    
    // integrarnos al componente de carrito
    
    // componente de tabs
  }
  
}