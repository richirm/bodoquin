import { Component, OnInit } from '@angular/core';

import { TecnologiaMascotasService } from './tecnologia-mascotas.service';
import { MascotaInterface } from './interfaces/mascota.interface';

@Component({
  selector: 'bodoquin-tecnologia-mascotas',
  templateUrl: './tecnologia-mascotas.component.html',
  styleUrls: ['./tecnologia-mascotas.component.scss']
})
export class TecnologiaMascotasComponent implements OnInit {

  mascotas: Array<MascotaInterface>;
  mascota: MascotaInterface = {};
  
  constructor (
    private tecnologiaMascotasService: TecnologiaMascotasService) {}
    
  ngOnInit() {
    this.getMascotas();
  }
  
  getMascotas() {
    this.tecnologiaMascotasService.getMascotas().subscribe(
      (response) => {
        console.log(response);
        this.mascotas = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }
  
  grabarMascota() {
    if(!!this.mascota.idMascota) {
      this.tecnologiaMascotasService.putMascota(this.mascota).subscribe(
        (response) => {
          this.getMascotas();
          this.limpiarFormulario();
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.tecnologiaMascotasService.postMascota(this.mascota).subscribe(
        (response) => {
          this.getMascotas();
          this.limpiarFormulario();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  
  seleccionarMascota(mascotaSeleccionado: MascotaInterface) {
    this.mascota =  { ...mascotaSeleccionado };
  }
  
  eliminarMascota(mascotaSeleccionado: MascotaInterface) {
    if(confirm('¡Esta seguro que desea eliminar?')) {
      this.tecnologiaMascotasService.deleteMascota(mascotaSeleccionado.idMascota).subscribe(
        (response) => {
          this.getMascotas();
          this.limpiarFormulario();
        },
        (error) => {
          console.log(error);
        }        
      );
    }
  }

  limpiarFormulario() {
    this.mascota = {};
  }
}