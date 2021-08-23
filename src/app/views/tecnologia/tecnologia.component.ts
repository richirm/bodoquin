import { Component } from '@angular/core';

@Component({
  selector: 'bodoquin-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.scss']
})
export class TecnologiaComponent {
  
  producto = {
    idProducto: 1001,
    nombreImg: 'galaxys10.jpg', 
    nombreCategoria: 'Samsung',
    nombreProducto: 'Samsung galaxy s10',
    descripcionProducto: '6 GB RAM + 128 gb almacenamiento + 5000 mah + full hd',
    precioProducto: 1599,
    cantidadProducto: 0,
  };

}