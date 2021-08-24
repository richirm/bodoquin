import { Component } from '@angular/core';

import { ProductoInterface } from '../../core/interfaces/producto.interface';

@Component({
  selector: 'bodoquin-jugueteria',
  templateUrl: './jugueteria.component.html',
  styleUrls: ['./jugueteria.component.scss']
})
export class JugueteriaComponent {
  
  productos : Array<ProductoInterface> = [
    {
      idProducto: 1001,
      nombreImg: 'piano.jpg', 
      nombreCategoria: '0-2',
      nombreProducto: 'Juguetes',
      descripcionProducto: 'Piano para bebes de deferentes colores para un mejor aprendizaje',
      precioProducto: 50.00,
      cantidadProducto: 0,
    },
    {
      idProducto: 1002,
      nombreImg: 'tortuga.jpg', 
      nombreCategoria: '0-2',
      nombreProducto: 'Juguetes',
      descripcionProducto: 'Totuga musical con canciones en ingles y español',
      precioProducto: 40.25,
      cantidadProducto: 0,
    },
    {
      idProducto: 1003,
      nombreImg: 'coche.jpg', 
      nombreCategoria: '2-4',
      nombreProducto: 'Coche',
      descripcionProducto: 'coche para niñas con diferentes diseños',
      precioProducto: 80.25,
      cantidadProducto: 0,
    },
    {
      idProducto: 1005,
      nombreImg: 'muñeco.jpg', 
      nombreCategoria: '2-4',
      nombreProducto: 'Juguetes',
      descripcionProducto: 'muñeca con chupon que llora y habla y remeda',
      precioProducto:  45.75,
      cantidadProducto: 0,
    },
    {
      idProducto: 1007,
      nombreImg: 'caballo.jpg', 
      nombreCategoria: '2-4',
      nombreProducto: 'Caballito',
      descripcionProducto: 'Caballo para montar y también es musical',
      precioProducto: 90.75,
      cantidadProducto: 0,
    },
    {
      idProducto: 1009,
      nombreImg: 'carro.jpg', 
      nombreCategoria: '2-4',
      nombreProducto: 'Carrito',
      descripcionProducto: 'Aprenderás a dar tus primeros pasitos jugando',
      precioProducto: 65.45,
      cantidadProducto: 0,
    },
    {
      idProducto: 1011,
      nombreImg: 'dinosaurios.jpg', 
      nombreCategoria: '2-4',
      nombreProducto: 'Dino',
      descripcionProducto: 'Jalaras a un carrito de dino divertido',
      precioProducto: 80.75,
      cantidadProducto: 0,
    },
    {
      idProducto: 1012,
      nombreImg: 'figuras.jpg', 
      nombreCategoria: '2-4',
      nombreProducto: 'figuras',
      descripcionProducto: 'juago dinamicos pra niños y niñas',
      precioProducto: 25.80,
      cantidadProducto: 0,
    },
    {
      idProducto: 1004,
      nombreImg: 'payaso.jpg', 
      nombreCategoria: '2-4',
      nombreProducto: 'payasitos',
      descripcionProducto: 'payasitos de madera para armar y elegir',
      precioProducto: 30.40,
      cantidadProducto: 0,
    },
    {
      idProducto: 1006,
      nombreImg: 'pelotas.jpg', 
      nombreCategoria: '2-4',
      nombreProducto: 'pelotas',
      descripcionProducto: 'pelotas de juguete muy modernas y coloridas',
      precioProducto: 15.75,
      cantidadProducto: 0,
    },
    {
      idProducto: 1008,
      nombreImg: 'cuadro.jpg', 
      nombreCategoria: '2-4',
      nombreProducto: 'cuadritos',
      descripcionProducto: 'cuadritos de madera de colores para armar',
      precioProducto: 55.75,
      cantidadProducto: 0,
    },
    {
      idProducto: 1010,
      nombreImg: 'lonchera.jpg', 
      nombreCategoria: '2-4',
      nombreProducto: 'lonchera',
      descripcionProducto: 'lonchera de madera para llevar tus juguetes',
      precioProducto: 65.75,
      cantidadProducto: 0,
    },
  ];
}