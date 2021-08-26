import { Component, Input } from '@angular/core';

import { ProductoInterface } from '../../core/interfaces/producto.interface';

@Component({
  selector: 'bodoquin-tarjetas-producto',
  templateUrl: './tarjetas-producto.component.html',
  styleUrls: ['./tarjetas-producto.component.scss']
})
export class TarjetasProductoComponent {
  @Input() productos: Array<ProductoInterface>;
  @Input() fondo: string;
}