import { Component, OnInit } from '@angular/core';

import { JugueteriaCentrosTuristicosService } from './jugueteria-centros-turisticos.service';
import { CentrosTuristicosInterface } from './interfaces/centrosTuristicos.interface';

@Component({
  selector: 'bodoquin-jugueteria-centros-turisticos',
  templateUrl: './jugueteria-centros-turisticos.component.html',
  styleUrls: ['./jugueteria-centros-turisticos.component.scss']
})
export class JugueteriaCentrosTuristicosComponent implements OnInit {

  centrosTuristicos: Array<CentrosTuristicosInterface>;
  
  nombre: string;
  precio: number;
  pais: string;
  
  constructor(
    private jugueteriaCentrosTuristicosService: JugueteriaCentrosTuristicosService) {}
    
  ngOnInit() {
    this.getCentrosTuristicos();
  }
  
  getCentrosTuristicos() {
    this.jugueteriaCentrosTuristicosService.getCentrosTuristicos().subscribe(
      (response) => {
        console.log(response);
        this.centrosTuristicos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  grabarCentroTuristico() {
    this.centrosTuristicos.push({
      idCentrosTuristicos: null,
      nombre: this.nombre,
      precio: this.precio,
      pais: this.pais
    });
  }
  
}