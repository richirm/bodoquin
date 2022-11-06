import { Component, OnInit } from '@angular/core';

import { ControlFormularioInterface } from 'src/app/core/interfaces/control-formulario.interface';
import { ProductosNaturalesServiciosService } from './productos-naturales-servicios.service';

@Component({
  selector: 'bodoquin-productos-naturales-servicios',
  templateUrl: './productos-naturales-servicios.component.html',
  styleUrls: ['./productos-naturales-servicios.component.scss']
})
export class ProductosNaturalesServiciosComponent implements OnInit {

  formularioSoporte: ControlFormularioInterface[] = [
    {
      id: 'nombre',
      label: 'Nombre',
      tipo: 'input'
    },
    {
      id: 'apellidoP',
      label: 'Apellido P',
      tipo: 'input'
    },
    {
      id: 'apellidoM',
      label: 'Apellido M',
      tipo: 'input'
    },
    {
      id: 'direccion',
      label: 'Direccion',
      tipo: 'input'
    },
    {
      id: 'correo',
      label: 'Correo',
      tipo: 'input'
    },
    {
      id: 'telefono',
      label: 'Teléfono',
      tipo: 'input'
    },
    {
      id: 'descripcion',
      label: 'Descripcion',
      tipo: 'textarea'
    }
  ];

  constructor(
    private productosNaturalesServiciosService: ProductosNaturalesServiciosService) {}

  ngOnInit() {
    // this.obtenerFormularioSoporte();
  }
  
  obtenerFormularioSoporte() {
    // Patron observador
    this.productosNaturalesServiciosService.obtenerFormularioSoporte().subscribe(
      (response) => {
        this.formularioSoporte = response;
      },
      (error) => {
        alert('Ha ocurrido un error en el formulario de soporte');
      }    
    );
  }
}
