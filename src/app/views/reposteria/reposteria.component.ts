import { Component } from '@angular/core';

import { ProductoInterface } from '../../core/interfaces/producto.interface';
import { CarritoService } from '../../core/services/carrito.service';

@Component({
  selector: 'bodoquin-reposteria',
  templateUrl: './reposteria.component.html',
  styleUrls: ['./reposteria.component.scss']
})
export class ReposteriaComponent {
  
  productos: Array<ProductoInterface> = [
    {
      idProducto: 1001,
      nombreImg: 'torta_chocolate_fresa.jpg', 
      nombreCategoria: 'Torta húmeda',
      nombreProducto: 'Torta de leche de Óreo',
      descripcionProducto: 'Torta rica en su sabor, ha ganado el premio internacional, hecha con agua manantial',
      precioProducto: 60.25,
      cantidadProducto: 0,
    },
    {
      idProducto: 1002,
      nombreImg: 'torta_selva_negra.jpg', 
      nombreCategoria: 'Torta húmeda',
      nombreProducto: 'Selva negra de cerezas',
      descripcionProducto: 'Compuesta por capas de bizcochuelo de chocolate embebido en kirsch e intercaladas con nata y cerezas.',
      precioProducto: 55.50,
      cantidadProducto: 0,
    },
    {
      idProducto: 1003,
      nombreImg: 'torta_chocolate.jpg', 
      nombreCategoria: 'Torta húmeda',
      nombreProducto: 'Torta Chocolate',
      descripcionProducto: '12 porciones, kekes, Manjar, Fudge de una rica Torta Chocolate.',
      precioProducto: 48.00,
      cantidadProducto: 0,
    },
    {
      idProducto: 1004,
      nombreImg: 'torta_dely_oreo.jpg', 
      nombreCategoria: 'Torta húmeda',
      nombreProducto: 'Deli Oreo',
      descripcionProducto: '12 porciones con galletas de oreo vainilla, polvo de chocolate de una rica Deli Oreo.',
      precioProducto: 72.00,
      cantidadProducto: 0,
    },
    {
      idProducto: 1005,
      nombreImg: 'torta_barra_3_leches.jpg', 
      nombreCategoria: 'Torta húmeda',
      nombreProducto: 'Barra tres leches',
      descripcionProducto: '12 porciones aproximadamente, con cerezas, fosh, manjar y listo para comer en tu almuerzo.',
      precioProducto: 49.00,
      cantidadProducto: 0,
    },
    {
      idProducto: 1006,
      nombreImg: 'keke_pina.jpg', 
      nombreCategoria: 'Kekes',
      nombreProducto: 'Keke de piña',
      descripcionProducto: 'Muy rico, sabroso y esponjoso, con piñas azucaradas y dulces como a todos nos gusta',
      precioProducto: 24.00,
      cantidadProducto: 0,
    },
    {
      idProducto: 1007,
      nombreImg: 'keke_zanahoria.jpg', 
      nombreCategoria: 'Kekes',
      nombreProducto: 'keke de zanahoria',
      descripcionProducto: 'Keke de Zanahoria con Manjar Blanco y Castañas, a precio de promición, sólo por hoy.',
      precioProducto: 42.00,
      cantidadProducto: 0,
    },
    {
      idProducto: 1008,
      nombreImg: 'keke_marmoleado.jpg', 
      nombreCategoria: 'Kekes',
      nombreProducto: 'Keke Marmoleado',
      descripcionProducto: '12-14 porciones de keke sabor a chocolate, con frutos secos que descubrirás mientras vayas comiendo.',
      precioProducto: 22.00,
      cantidadProducto: 0,
    },
    {
      idProducto: 1009,
      nombreImg: 'keke_platano_nueces.jpg', 
      nombreCategoria: 'Kekes',
      nombreProducto: 'Keke de Plátano con Nueces',
      descripcionProducto: '12-14 porciones de keke sabor a chocolate, con frutos secos que descubrirás mientras vayas comiendo.',
      precioProducto: 22.00,
      cantidadProducto: 0,
    },
    {
      idProducto: 1010,
      nombreImg: 'torta_barra_torta_chocolate.jpg', 
      nombreCategoria: 'Torta húmeda',
      nombreProducto: 'Barra torta de chocolate',
      descripcionProducto: '12 porciones aproximadamente, con cerezas, fosh, manjar y listo para comer en tu almuerzo.',
      precioProducto: 49.50,
      cantidadProducto: 0,
    },
    {
      idProducto: 1011,
      nombreImg: 'torta_cumple_fiesta.jpg', 
      nombreCategoria: 'Torta húmeda',
      nombreProducto: 'Feliz Cumple Fiesta',
      descripcionProducto: '12 porciones, compuesta por capas de bizcochuelo de caramelo y con el diseño que más de guste.',
      precioProducto: 69.00,
      cantidadProducto: 0,
    },
    {
      idProducto: 1012,
      nombreImg: 'torta_delicia_fresa.jpg', 
      nombreCategoria: 'Torta húmeda',
      nombreProducto: 'Torta Delicia de Fresa',
      descripcionProducto: '24 porciones, compuesta por fresas y fosh, listo para tus cumpleaños y días que más te gusten disfrutar.',
      precioProducto: 84.00,
      cantidadProducto: 0,
    },
  ];
  
  constructor(
    private carritoService: CarritoService) {}
    
  clickOk() {
    this.carritoService.agregarProducto('juanito');
  }
  
}