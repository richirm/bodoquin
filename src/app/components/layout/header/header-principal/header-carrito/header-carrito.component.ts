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
  
  productos: Array<ProductoInterface> = [];
  
  constructor(
    private carritoService: CarritoService) {}
  
  ngOnInit() {
    this.calcMontoTotal();
    this.suscribirProductoAgregado();
    this.suscribirProductoSumado();
    this.suscribirProductoRestado();
    this.suscribirProductoEliminado();
  }
  
  suscribirProductoAgregado() {
    this.carritoService.productoAgregado.subscribe((producto: ProductoInterface) => {
      this.insertProduct(producto);
    });
  }
  
  suscribirProductoSumado() {
    this.carritoService.productoSumado.subscribe((producto: ProductoInterface) => {
      if(producto.cantidadProducto === 0) {
        this.insertProduct(producto)
      } else {
        this.addItemInProduct(producto);
      }
    });
  }
  
  suscribirProductoRestado() {
    this.carritoService.productoRestado.subscribe((producto: ProductoInterface) => {
      this.removeItemInProduct(producto);
    });
  }
  
  suscribirProductoEliminado() {
    this.carritoService.productoEliminado.subscribe((producto: ProductoInterface) => {
      const indexProducto = this.productos.findIndex(productoItem => {
        return producto.idProducto ==  productoItem.idProducto; 
      });
      this.deleteProduct(indexProducto);
    });
  }
  
  mostrarPopupCarrito() {
    this.showPopup = true;   
  }
  
  insertProduct(producto: ProductoInterface) {
    producto.cantidadProducto++;
    this.productos.push(producto);
    this.calcMontoTotal();
  }
  
  deleteProduct(indexProducto: number) {
    this.productos[indexProducto].cantidadProducto = 0;
    this.productos.splice(indexProducto, 1);
    this.calcMontoTotal();
  }
  
  removeItemInProduct(producto: ProductoInterface) {
    if(producto.cantidadProducto >= 2) {
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