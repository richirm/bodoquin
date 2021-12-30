import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductoInterface } from '../../../core/interfaces/producto.interface';
import { ReposteriaService } from '../reposteria.service';
import { Reposteria2Service } from '../reposteria2.service';

import { AlumnoInterface } from '../interfaces/alumno.interface';

@Component({
  selector: 'bodoquin-reposteria-listado',
  templateUrl: './reposteria-listado.component.html',
  styleUrls: ['./reposteria-listado.component.scss']
})
export class ReposteriaListadoComponent implements OnInit {
  
  productos: Array<ProductoInterface> = [];
  alumnos: Array<AlumnoInterface> = [];
  
  constructor(
    private reposteriaService: ReposteriaService,
    private reposteria2Service: Reposteria2Service,
    private router: Router) {}
    
  ngOnInit() {
    this.obtenerProductos();
    
    this.getAlumnosCache();
    this.getAlumnosBackend();     
    this.getApellidosSession();
    this.getNombreLocal();
  }
  
  getAlumnosCache() {
    const alumnos = this.reposteria2Service.getAlumnosCache();
    console.log(alumnos);
  }
  
  getNombreLocal() {
    const nombre = this.reposteria2Service.getNombreLocal();
    console.log(nombre);
  }
  
  getApellidosSession() {
    const apellidos = this.reposteria2Service.getApellidosSession();
    console.log(apellidos);
  }
  
  getAlumnosBackend() {
    this.reposteria2Service.getAlumnosBackend().subscribe(
      (response) => {
        console.log(response);
        this.alumnos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  obtenerProductos() {
    this.productos = this.reposteriaService.obtenerProductos();
  }
  
  onClickTarjeta(producto: ProductoInterface) {
    this.router.navigate(['/reposteria/detalle', producto.idProducto]);
  } 
  
}