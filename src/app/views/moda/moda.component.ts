import { Component } from '@angular/core';

@Component({
  selector: 'bodoquin-moda',
  templateUrl: './moda.component.html',
  styleUrls: ['./moda.component.scss']
})
export class ModaComponent {
  
  producto = {
    idProducto: 1001,
    nombreImg: 'carnivalxl.jpg', 
    nombreCategoria: 'Sombras',
    nombreProducto: 'Carnival xl',
    descripcionProducto: 'Paleta de sombras 40 tonos de diversos colores',
    precioProducto: 350,
    cantidadProducto: 0,
  };
  
}
 