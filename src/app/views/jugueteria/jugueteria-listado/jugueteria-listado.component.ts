import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductoInterface } from '../../../core/interfaces/producto.interface';
import { JugueteriaService } from '../jugueteria.service';
import { Jugueteria2Service } from '../jugueteria2.service';

import { MusicaInterface } from '../interfaces/musica.interface';
import { CentroTuristicoInterface } from '../interfaces/centro-turistico.interface';

@Component({
  selector: 'bodoquin-jugueteria-listado',
  templateUrl: './jugueteria-listado.component.html',
  styleUrls: ['./jugueteria-listado.component.scss']
})
export class JugueteriaListadoComponent implements OnInit {
  
  productos : Array<ProductoInterface> = [];
  musicas: Array<MusicaInterface> = [];
  centrosTuristicos: Array<CentroTuristicoInterface> = [];
  
  constructor(
    private jugueteriaService: JugueteriaService,
    private jugueteria2Service: Jugueteria2Service,
    private router: Router) {}
    
  ngOnInit() {
    this.obtenerProductos(); 
    this.getMusicasCache();
    this.getMusicaPrecioLocal();
    this.getMusicaGeneroSession();
    this.getMusicaBackend();
    this.getCentrosTuristicosBackend();
  } 
  
  getMusicasCache() {
    const musicas = this.jugueteria2Service.getMusicasCache();
    console.log(musicas);
  }
  
  getMusicaPrecioLocal() {
    const precio = this.jugueteria2Service.getMusicaPrecioLocal();
    console.log(precio);
  }
  
  getMusicaGeneroSession() {
    const genero = this.jugueteria2Service.getMusicaGeneroSession();
    console.log(genero);
  }
  
  getMusicaBackend() {
    this.jugueteria2Service.getMusicaBackend().subscribe(
      (response) => {
        console.log(response);
        this.musicas = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  getCentrosTuristicosBackend() {
    this.jugueteria2Service.getCentrosTuristicosBackend().subscribe(
      (response) => {
        console.log(response);
        this.centrosTuristicos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  obtenerProductos() {
    this.productos = this.jugueteriaService.obtenerProductos();
  }
  
  onClickTarjeta(producto: ProductoInterface) {
    this.router.navigate(['/jugueteria/detalle', producto.idProducto]);
  } 
  
}