import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductoInterface } from '../../../core/interfaces/producto.interface';
import { ReposteriaService } from '../reposteria.service';
import { Reposteria2Service } from '../reposteria2.service';

@Component({
  selector: 'bodoquin-reposteria-listado',
  templateUrl: './reposteria-listado.component.html',
  styleUrls: ['./reposteria-listado.component.scss']
})
export class ReposteriaListadoComponent implements OnInit {
  
  productos: Array<ProductoInterface> = [];
  
  constructor(
    private reposteriaService: ReposteriaService,
    private reposteria2Service: Reposteria2Service,
    private router: Router) {}
    
  ngOnInit() {
    this.obtenerProductos();
    
    const alumnos = this.reposteria2Service.getAlumnosCache();
    console.log(alumnos);
    
    const nombre = this.reposteria2Service.getNombreLocal();
    console.log(nombre);
    
    const apellidos = this.reposteria2Service.getApellidosSession();
    console.log(apellidos);
    
    // this.reposteria2Service.getAlumnosBackend();
  }
  
  obtenerProductos() {
    this.productos = this.reposteriaService.obtenerProductos();
  }
  
  onClickTarjeta(producto: ProductoInterface) {
    this.router.navigate(['/reposteria/detalle', producto.idProducto]);
  } 
  
}