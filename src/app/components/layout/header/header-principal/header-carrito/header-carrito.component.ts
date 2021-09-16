import { Component } from '@angular/core';

import { ProductoInterface } from '../../../../../core/interfaces/producto.interface';

@Component({
  selector: 'bodoquin-header-carrito',
  templateUrl: './header-carrito.component.html',
  styleUrls: ['./header-carrito.component.scss']
})
export class HeaderCarritoComponent {
  
  showPopup: boolean = false;
   
  maximoPorProducto: number = 5; 
  
  productos: Array<ProductoInterface> = [
    {
      idProducto: 1001,
      nombreImg: 'torta_selva_negra.jpg', 
      nombreCategoria: 'Torta húmeda',
      nombreProducto: 'Torta de leche de Óreo1',
      descripcionProducto: '',
      precioProducto: 60.25,
      cantidadProducto: 3,
    }, 
    {
      idProducto: 1002,
      nombreImg: 'torta_selva_negra.jpg',
      nombreCategoria: 'Torta húmeda2',
      nombreProducto: 'Torta de leche de Óreo2',
      descripcionProducto: '',
      precioProducto: 70.50,
      cantidadProducto: 4,
    }, 
    {
      idProducto: 1003,
      nombreImg: 'torta_selva_negra.jpg',
      nombreCategoria: 'Torta húmeda3',
      nombreProducto: 'Torta de leche de Óreo3',
      descripcionProducto: '',
      precioProducto: 45.50,
      cantidadProducto: 2,
    }
  ];
  
  mostrarPopupCarrito() {
    this.showPopup = true;   
  }
  
  deleteProduct(idProducto: number) {
    // logica para eliminar un producto (x)
  }
  
  removeItemInProduct(producto: ProductoInterface) {
    if(producto.cantidadProducto > 0) {
      producto.cantidadProducto--;
    }
  }
  
  addItemInProduct(producto: ProductoInterface) {
    if(producto.cantidadProducto < this.maximoPorProducto) {
      producto.cantidadProducto++; 
    }
  }
  
  calcUnidadesEnProducto() {
    // logica para actualizar el numero de unidades por producto
  }
  
  calcMontoTotal() {
    // logica para actualizar el monto total
  }
  
  calcUnidadesTotales() {
    // logica para actualizar el numero de unidades totales del carrito (chip)
  }
  
}