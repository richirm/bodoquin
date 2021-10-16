import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModaService } from '../moda.service';
import { ProductoInterface } from '../../../core/interfaces/producto.interface';
import { CarritoService } from '../../../core/services/carrito.service';


@Component({
  selector: 'bodoquin-moda-detalle',
  templateUrl: './moda-detalle.component.html',
  styleUrls: ['./moda-detalle.component.scss']
})
export class ModaDetalleComponent implements OnInit {
   
  producto: ProductoInterface;
  
  constructor(
    private route: ActivatedRoute,
    private modaService: ModaService,
    private carritoService: CarritoService) {}
    
  ngOnInit() {
    this.getInfoProducto();
  }
  
  getInfoProducto() {
    // Capturar el id de la url
    const idProducto = this.route.snapshot.params.idProducto;
    console.log(idProducto);
    
    // Obtener la información del producto de acuerdo a su id
    this.producto = this.modaService.obtenerProducto(idProducto);
    console.log(this.producto);
    
    // mostrar el producto en el html
    
    // colocar el diseño de la vista de detalle
    
    // integrarnos al componente de carrito
    
    // componente de tabs
  }
  
  sumarProducto() {
    this.carritoService.productoSumado.emit(this.producto);
  }
  
  restarProducto() {
    this.carritoService.productoRestado.emit(this.producto);
  }
}