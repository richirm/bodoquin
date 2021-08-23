import { Component } from '@angular/core';

@Component({
  selector: 'bodoquin-jugueteria',
  templateUrl: './jugueteria.component.html',
  styleUrls: ['./jugueteria.component.scss']
})
export class JugueteriaComponent {
  
  producto = {
    idProducto: 1001,
    nombreImg: 'piano.jpg', 
    nombreCategoria: '0-2',
    nombreProducto: 'Juguetes',
    descripcionProducto: 'Piano para bebes de deferentes colores para un mejor aprendizaje',
    precioProducto: 50.00,
    cantidadProducto: 0,
  };
  
}