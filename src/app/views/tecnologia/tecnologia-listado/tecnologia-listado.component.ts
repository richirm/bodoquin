import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductoInterface } from '../../../core/interfaces/producto.interface';
import { TecnologiaService } from '../tecnologia.service';
import { Tecnologia2Service } from '../tecnologia2.service';

import { ComidaInterface } from '../interfaces/comida.interface';
import { CursoInterface } from '../interfaces/curso.interface';

@Component({
  selector: 'bodoquin-tecnologia-listado',
  templateUrl: './tecnologia-listado.component.html',
  styleUrls: ['./tecnologia-listado.component.scss']
})
export class TecnologiaListadoComponent implements OnInit {
  
  productos: Array<ProductoInterface> = [];
  comidas: Array<ComidaInterface> = [];
  cursos: Array<CursoInterface> = [];
   
  constructor(
    private tecnologiaService: TecnologiaService,
    private tecnologia2Service: Tecnologia2Service,
    private router: Router) {}
    
  ngOnInit() {
    this.obtenerProductos();
	
    this.getComidasCache();
    this.getNombreLocal();
    this.getIngredienteSession();
    this.getComidasBackend();
    this.getCursosBackend();
  }
  
  getComidasCache() {
	const comidas = this.tecnologia2Service.getComidasCache();
    console.log(comidas);
  }
  
  getNombreLocal() {
    const nombre = this.tecnologia2Service.getNombreLocal();
    console.log(nombre);
  }
  
  getIngredienteSession() {
    const ingrediente = this.tecnologia2Service.getIngredienteSession();
    console.log(ingrediente);
  }
	
  getComidasBackend() {
	this.tecnologia2Service.getComidasBackend().subscribe(
      (response) => {
        console.log(response);
        this.comidas = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  getCursosBackend() {
	this.tecnologia2Service.getCursosBackend().subscribe(
      (response) => {
        console.log(response);
        this.cursos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  
  obtenerProductos() {
    this.productos = this.tecnologiaService.obtenerProductos();
  }
  
  onClickTarjeta(producto: ProductoInterface) {
    this.router.navigate(['/tecnologia/detalle', producto.idProducto]);
  } 
  
}