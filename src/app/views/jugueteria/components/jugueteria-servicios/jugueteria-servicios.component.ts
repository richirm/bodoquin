import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';

import { ControlFormularioInterface } from './interfaces/ControlFormulario.interface';
import { AsistenciaConstans } from './constans/asistencia.constans';
import { AveriasConstans } from './constans/averias.constans';
import { JugueteriaServiciosService } from './jugueteria-servicios.service';

@Component({
  selector: 'bodoquin-jugueteria-servicios',
  templateUrl: './jugueteria-servicios.component.html',
  styleUrls: ['./jugueteria-servicios.component.scss']
})
export class JugueteriaServiciosComponent implements OnInit, OnDestroy, OnChanges {
  
  @Input() usuario: string;
  @Input() nickname: string;
  
  formularioAsistencia: Array<ControlFormularioInterface>;
  formularioAverias: Array<ControlFormularioInterface>;
  formularioArtefactos: Array<ControlFormularioInterface>;
  
  titulo: string;
  tituloAsistencia: string;
  secundero: number;
  intervaloSecundero: ReturnType<typeof setInterval>;
  timeoutTitulo: ReturnType<typeof setTimeout>;
  
  //Patron de injección de dependencias
  constructor(
    private jugueteriaServiciosService: JugueteriaServiciosService) {}
    
  ngOnInit() {
    this.obtenerFormularioAsistencia(); 
    this.obtenerFormularioAverias(); 
    this.obtenerFormularioArtefactos();
    this.obtenerTitulo();
    this.obtenerTituloAsistencia();
    this.obtenerMostrarSecundero();
  }
  
  ngOnChanges(changes) {
    if(changes.usuario || changes.nickname) {
      this.obtenerTitulo();
    }
  }
  
  ngOnDestroy() {
    clearInterval(this.intervaloSecundero);
    clearTimeout(this.timeoutTitulo);
    //limpiar servicio pentientes
  }
  
  obtenerTitulo() {
    this.titulo = `hola ${this.usuario} "${this.nickname}", estás en Resposteria Servicios`;
  }
  
  obtenerFormularioAsistencia() {
    // this.formularioAsistencia = AsistenciaConstans.FORMULARIO_CONTROLES;
    // Patron observador
    this.jugueteriaServiciosService.obtenerFormularioAsistencia().subscribe(
      (response) => {
        this.formularioAsistencia = response;
      },
      (error) => {
        alert('Ha ocurrido un error en el formulario de asistencia');
      }
    );
  }
  
  obtenerFormularioAverias() {
    this.jugueteriaServiciosService.obtenerFormularioAverias().subscribe(
      (response) => {
        this.formularioAverias = response;
      },
      (error) => {
        alert('Ha ocurrido un error en el formulario de averias');
      }
    );
  }
  
  obtenerFormularioArtefactos() {
    this.jugueteriaServiciosService.obtenerFormularioArtefactos().subscribe(
      (response) => {
        this.formularioArtefactos = response;
      },
      (error) => {
        alert('Ha ocurrido un error en el formulario de artefactos');
      }
    );
  }
    
  obtenerTituloAsistencia() {
    this.tituloAsistencia = 'Hola Pepito';
    
    this.timeoutTitulo = setTimeout(() => {
      this.tituloAsistencia = 'Hola Cusi Cusa!';
      console.log('Mi nuevo titulo es: ', this.tituloAsistencia);
      }, 10 * 1000);
  }
  
  obtenerMostrarSecundero() {
    this.secundero = 1;
    
    this.intervaloSecundero = setInterval(() => {
      this.secundero = this.secundero + 5;
      console.log('Estoy contando...', this.secundero);
    }, 5 * 1000);
  }
  
  ejecutarServicio(mensaje: string) {
    console.log(mensaje);
  }
}