import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { ProductoInterface } from '../../../core/interfaces/producto.interface';
import { ReposteriaService } from '../reposteria.service';

@Component({
  selector: 'bodoquin-reposteria-listado',
  templateUrl: './reposteria-listado.component.html',
  styleUrls: ['./reposteria-listado.component.scss']
})
export class ReposteriaListadoComponent implements OnInit {
  
  productos: Array<ProductoInterface> = [];
  
  username: string = '';
  nickname: string = '';
  
  showModalRegisterProduct: boolean = false;
  
  formGroupReposteria: FormGroup;
  
  constructor(
    private reposteriaService: ReposteriaService,
    private router: Router) {}
    
  ngOnInit() {
    this.obtenerProductos();
    this.crearFormulario();
  }
  
  crearFormulario() {
     this.formGroupReposteria = new FormGroup({
       id: new FormControl(),
       nombreProducto: new FormControl(),
       nombreCategoria: new FormControl(),
       precio: new FormControl(),
       image: new FormControl(),
       descripcion: new FormControl(),
     });
  }
  
  obtenerProductos() {
    this.reposteriaService.obtenerProductos().subscribe(
      (response) => {
        this.productos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  onClickTarjeta(producto: ProductoInterface) {
    this.router.navigate(['/reposteria/detalle', producto.idProducto]);
  }
  
  onClickNuevo() {
     this.formGroupReposteria.reset();
     this.showModalRegisterProduct = true;
  }
  
  grabarProducto() {
    const producto = {
        idProducto: this.formGroupReposteria.get('id').value,
        nombreImg: this.formGroupReposteria.get('image').value,
        nombreCategoria: this.formGroupReposteria.get('nombreCategoria').value,
        nombreProducto: this.formGroupReposteria.get('nombreProducto').value,
        descripcionProducto: this.formGroupReposteria.get('descripcion').value,
        precioProducto: this.formGroupReposteria.get('precio').value,
        cantidadProducto: 0,
        especificaciones: "Fecha vencimiento: 01/01/2022|Conservación: Refrigerar hasta antes de comer"
    };
    
    if(!!producto.idProducto) {
      this.reposteriaService.actualizarProducto(producto).subscribe(
        () => {
          this.obtenerProductos();
          this.showModalRegisterProduct = false;
        }
      );
    } else {
      this.reposteriaService.grabarProducto(producto).subscribe(
        () => {
          this.obtenerProductos();
          this.showModalRegisterProduct = false;
        }
      )
    }    
  }
  
  onClickEditar(producto: ProductoInterface) {
    event.stopPropagation();
    
    this.showModalRegisterProduct = true; 

    this.formGroupReposteria.patchValue({
      id: producto.idProducto,
      nombreProducto: producto.nombreProducto,
      nombreCategoria: producto.nombreCategoria,
      precio: producto.precioProducto,
      image: producto.nombreImg,
      descripcion: producto.descripcionProducto
    });
  }
  
  onClickRemove(producto: ProductoInterface) {
    event.stopPropagation();
    
    if(confirm('¿Está seguro que desea eliminiar?')) {      
      this.reposteriaService.deleteProducto(producto.idProducto).subscribe(
        () => {
          this.obtenerProductos();
        }
      )
    }
    
  }
  
}