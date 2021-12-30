import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductoInterface } from '../../../core/interfaces/producto.interface';
import { JugueteriaService } from '../jugueteria.service';
import { Jugueteria2Service } from '../jugueteria2.service';

import { MusicaInterface } from '../interfaces/musica.interface';

@Component({
  selector: 'bodoquin-jugueteria-listado',
  templateUrl: './jugueteria-listado.component.html',
  styleUrls: ['./jugueteria-listado.component.scss']
})
export class JugueteriaListadoComponent implements OnInit {
  
  productos : Array<ProductoInterface> = [];
  musicas: Array<MusicaInterface> = [];
  
  constructor(
    private jugueteriaService: JugueteriaService,
    private jugueteria2Service: Jugueteria2Service,
    private router: Router) {}
    
  ngOnInit() {
    this.obtenerProductos();    
	
    const musicas = this.jugueteria2Service.getMusicasCache();
    console.log(musicas);

    const precio = this.jugueteria2Service.getMusicaPrecioLocal();
    console.log(precio);

    const genero = this.jugueteria2Service.getMusicaGeneroSession();
    console.log(genero);

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
  
  obtenerProductos() {
    this.productos = this.jugueteriaService.obtenerProductos();
  }
  
  onClickTarjeta(producto: ProductoInterface) {
    this.router.navigate(['/jugueteria/detalle', producto.idProducto]);
  } 
  
}