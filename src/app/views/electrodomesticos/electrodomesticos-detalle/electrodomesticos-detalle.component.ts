import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ElectrodomesticosService } from '../electrodomesticos.service';
import { ProductoInterface } from '../../../core/interfaces/producto.interface';

@Component({
  selector: 'bodoquin-electrodomesticos-detalle',
  templateUrl: './electrodomesticos-detalle.component.html',
  styleUrls: ['./electrodomesticos-detalle.component.scss']
})
export class ElectrodomesticosDetalleComponent implements OnInit {

  producto: ProductoInterface;
  
  constructor(
    private route: ActivatedRoute,
    private electrodomesticosService: ElectrodomesticosService) {}
    
  ngOnInit() {
    this.getInfoProducto();
  }
  
  getInfoProducto() {
    const idProducto = this.route.snapshot.params.idProducto;
    
    this.electrodomesticosService.obtenerProducto(idProducto).subscribe(
      (response) => {
        this.producto = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
