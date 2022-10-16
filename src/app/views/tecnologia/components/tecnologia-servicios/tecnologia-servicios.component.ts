import { Component, OnInit, OnDestroy, Input, OnChanges } from'@angular/core';

import { ControlFormularioInterface } from'./interfaces/ControlFormulario.interface';
import { AsistenciaConstants } from'./constants/asistencia.constants';
import { SoporteConstants } from'./constants/soporte.constants';
import { TecnologiaServiciosService } from'./tecnologia-servicios.service';

@Component({
  selector: 'bodoquin-tecnologia-servicios',
  templateUrl: './tecnologia-servicios.component.html',
  styleUrls: ['./tecnologia-servicios.component.scss']
})
export class TecnologiaServiciosComponent implements OnInit, OnDestroy, OnChanges {
  
  @Input() usuario: string;
  @Input() nickname: string;
  
  formularioAsistencia: Array<ControlFormularioInterface>;
  formularioSoporte: Array<ControlFormularioInterface>;
  formularioReparacion: Array<ControlFormularioInterface>;
  
  titulo: string;
  tituloAsistencia: string;
  contador:number;
  intervaloContador: ReturnType<typeof setInterval>;
  timeoutTitulo: ReturnType<typeof setTimeout>;
  
  nombre: string ='David Rosales';
  precio: number = 2899.99;
  persona = {
    nombre: 'Manolo',
    edad: 18,
  };
  fechaNacimiento: Date = new Date(1966
  , 9, 25);
  parrafo: string = 'hola estamos esperando, gracias por asistir';
  
  constructor(
    private tecnologiaServiciosService: TecnologiaServiciosService){}
  
  ngOnInit() {
    this.obtenerTitulo();
    this.obtenerFormularioAsistencia();
    this.obtenerFormularioSoporte();
    this.obtenerFormularioReparacion();
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
  }
  
  obtenerTitulo() {
    this.titulo = `Hola ${this.usuario} "${this.nickname}", estas en Tecnologia servicios`;
  }
  
  obtenerFormularioAsistencia() {
    // this.formularioAsistencia = AsistenciaConstants.FORMULARIO_CONTROLES;
    
    this.tecnologiaServiciosService.obtenerFormularioAsistencia().subscribe(
      (response) => {
        this.formularioAsistencia = response;
      }, 
      (error) => {
        alert('Ha ocurrido un error en el formulario de asistencia');
      }
    );
  }
  
  obtenerFormularioSoporte() {
    // this.formularioSoporte = SoporteConstants.FORMULARIO_CONTROLES;
    this.tecnologiaServiciosService.obtenerFormularioSoporte().subscribe(
      (response) => {
        this.formularioSoporte = response;
      }, 
      (error) => {
        alert('Ha ocurrido un error en el formulario de soporte');
      }
    );
  }
  
  obtenerFormularioReparacion() {
    this.tecnologiaServiciosService.obtenerFormularioReparacion().subscribe(
      (response) => {
        this.formularioReparacion = response;
      }, 
      (error) => {
        alert('Ha ocurrido un error en el formulario de reparacion');
      }
    );
  }
  
  obtenerTituloAsistencia() {
    this.tituloAsistencia = 'Hola pepito';
  
    this.timeoutTitulo = setTimeout(() => {
      this.tituloAsistencia = 'Hola Cusi Cusa!';
      console.log('Minuevo titulo es: ', this.tituloAsistencia);
    },3 * 1000);
  }
  
  mostrarContador() {
    this.contador = 1;
    
    this.intervaloContador = setInterval (() => {
      this.contador = this.contador + 5;
      console.log('Estoy contando...', this.contador);
    }, 3 * 1000);
  }
  
  ejecutarServicio(mensaje: string) {
    console.log(mensaje);
  }
}