import { Component, OnInit } from '@angular/core';

import { ProductoInterface } from '../../../../../core/interfaces/producto.interface';
import { CarritoService } from '../../../../../core/services/carrito.service';

@Component({
  selector: 'bodoquin-header-carrito',
  templateUrl: './header-carrito.component.html',
  styleUrls: ['./header-carrito.component.scss']
})
export class HeaderCarritoComponent implements OnInit {
  
  showPopup: boolean = false;
   
  maximoPorProducto: number = 5;
  montoTotal: number = 0;
  cantidadUnidades: number = 0;
  
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
  
  constructor(
    private carritoService: CarritoService) {}
  
  ngOnInit() {
    this.calcMontoTotal();
    this.suscribirAgregarProducto();
  }
  
  suscribirAgregarProducto() {
    this.carritoService.productoSeleccionado.subscribe((producto: ProductoInterface) => {
      this.productos.push(producto);
    });
  }
  
  mostrarPopupCarrito() {
    this.showPopup = true;   
  }
  
  deleteProduct(indexProducto: number) {
    this.productos.splice(indexProducto, 1);
    this.calcMontoTotal();
  }
  
  removeItemInProduct(producto: ProductoInterface) {
    if(producto.cantidadProducto > 0) {
      producto.cantidadProducto--;
      this.calcMontoTotal();
    }
  }
  
  addItemInProduct(producto: ProductoInterface) {
    if(producto.cantidadProducto < this.maximoPorProducto) {
      producto.cantidadProducto++; 
      this.calcMontoTotal();
    }
  }
  
  calcUnidadesEnProducto() {
    // logica para actualizar el numero de unidades por producto
  }
  
  calcMontoTotal() {
    this.montoTotal = 0;
    this.cantidadUnidades = 0;
    this.productos.forEach(producto => {
      this.montoTotal += (producto.precioProducto * producto.cantidadProducto);
      this.cantidadUnidades += producto.cantidadProducto;
    });  
  }
  
  calcUnidadesTotales() {
    // logica para actualizar el numero de unidades totales del carrito (chip)
  } 
}