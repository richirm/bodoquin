import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';

import { ControlFormularioInterface } from './interfaces/ControlFormulario.interface';
import { AsistenciaConstants } from './constants/asistencia.constants';
import { SorporteConstants } from './constants/soporte.constants';
import { ReposteriaServiciosService } from './reposteria-servicios.service';

// Patron decorador
@Component({
  selector: 'bodoquin-reposteria-servicios',
  templateUrl: './reposteria-servicios.component.html',
  styleUrls: ['./reposteria-servicios.component.scss']
})
export class ReposteriaServiciosComponent implements OnInit, OnDestroy, OnChanges {
  
  @Input() usuario: string;
  @Input() nickname: string;
  
  formularioAsistencia: Array<ControlFormularioInterface>;
  formularioSoporte: Array<ControlFormularioInterface>;
  
  titulo: string;
  tituloAsistencia: string;
  contador: number;
  intervaloContador: ReturnType<typeof setInterval>;
  timeoutTitulo: ReturnType<typeof setTimeout>;
  
  nombre: string = 'Ricardo Rosales';
  precio: number = 5324.75;
  persona = {
    nombre: 'Rufo',
    edad: 12
  };
  fechaNacimiento: Date = new Date(1989, 10, 1);
  parrafo: string = 'hola estamos esperando, por favor llega temprano';
  
  //Patron de injección de dependencias
  constructor(
    private reposteriaServiciosService: ReposteriaServiciosService) {}
    
  ngOnInit() {
    this.obtenerTitulo();
    this.obtenerFormularioAsistencia();
    this.obtenerFormularioSoporte();
    this.obtenerTituloAsistencia();
    
    this.mostrarContador();
  }
  
  ngOnChanges(changes) {
    if(changes.usuario || changes.nickname) {
      this.obtenerTitulo();
    }
  }
  
  ngOnDestroy() {
    clearInterval(this.intervaloContador);
    clearTimeout(this.timeoutTitulo);
    // limpiar servicios pendientes
  }
  
  obtenerTitulo() {
    this.titulo = `Hola ${this.usuario} "${this.nickname}", estás en Reposteria Servicios`;
  }
  
  obtenerFormularioAsistencia() {
    // this.formularioAsistencia = AsistenciaConstants.FORMULARIO_CONTROLES;
    
    // Patron observador
    this.reposteriaServiciosService.obtenerFormularioAsistencia().subscribe(
      (response) => {
        this.formularioAsistencia = response;
      },
      (error) => {
        alert('Ha ocurrido un error en el formulario de asistencia');
      }    
    );
  }
  
  obtenerFormularioSoporte() {
    this.formularioSoporte = SorporteConstants.FORMULARIO_CONTROLES;
  }
  
  obtenerTituloAsistencia() {
    this.tituloAsistencia = 'Hola Pepito';
    
    this.timeoutTitulo = setTimeout(() => {
      this.tituloAsistencia = 'Hola Cusi Cusa!';
      // console.log('Mi nuevo titulo es: ', this.tituloAsistencia);
    }, 10 * 1000);
  }
  
  mostrarContador() {
    this.contador = 1;
    
    this.intervaloContador = setInterval(() => {
      this.contador = this.contador + 1;
      // console.log('Estoy contando...', this.contador);
    }, 1 * 1000);
  }
  
  ejecutarServicio(mensaje: string) {
    console.log(mensaje);
  }  
  
}