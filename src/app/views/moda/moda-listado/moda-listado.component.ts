import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductoInterface } from '../../../core/interfaces/producto.interface';
import { ModaService } from '../moda.service';
import { Moda2Service } from '../moda2.service';

import { MascotaInterface } from '../interfaces/mascota.interface';

@Component({
  selector: 'bodoquin-moda-listado',
  templateUrl: './moda-listado.component.html',
  styleUrls: ['./moda-listado.component.scss']
})
export class ModaListadoComponent implements OnInit {
  
  productos: Array<ProductoInterface> = [];
  mascotas: Array<MascotaInterface> = [];
 
  constructor(
    private modaService: ModaService,
    private moda2Service: Moda2Service,
    private router: Router) {}
    
  ngOnInit() {
    this.obtenerProductos();
	
	const libros = this.moda2Service.getLibrosCache();
    console.log(libros);

    const nombre = this.moda2Service.getNombreLocal();
    console.log(nombre);

    const genero = this.moda2Service.getLibrosGeneroSession();
    console.log(genero);
	
	this.moda2Service.getMascotasBackend().subscribe(
      (response) => {
        console.log(response);
        this.mascotas = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  obtenerProductos() {
    this.productos = this.modaService.obtenerProductos();
  }
  
  onClickTarjeta(producto: ProductoInterface) {
    this.router.navigate(['/moda/detalle', producto.idProducto]);
  } 
  
}