export interface ProductoInterface {
  idProducto: number;
  nombreImg: string;
  nombreCategoria: string;
  nombreProducto: string;
  descripcionProducto: string;
  precioProducto: number;
  cantidadProducto: number;
  especificaciones?: Array<string> | string;
}