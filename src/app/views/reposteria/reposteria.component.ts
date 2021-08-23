import { Component } from '@angular/core';

@Component({
  selector: 'bodoquin-reposteria',
  templateUrl: './reposteria.component.html',
  styleUrls: ['./reposteria.component.scss']
})
export class ReposteriaComponent {
  
  producto = {
    idProducto: 1001,
    nombreImg: 'torta_chocolate_fresa.jpg', 
    nombreCategoria: 'Torta húmeda',
    nombreProducto: 'Torta de leche de Óreo',
    descripcionProducto: 'Torta rica en su sabor, ha ganado el premio internacional, hecha con agua manantial',
    precioProducto: 60.25,
    cantidadProducto: 0,
  };
  
}