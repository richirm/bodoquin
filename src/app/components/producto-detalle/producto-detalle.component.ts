import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';

import { ProductoInterface } from '../../core/interfaces/producto.interface';

@Component({
  selector: 'bodoquin-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss']
})
export class ProductoDetalleComponent {
  
  @Input() producto: ProductoInterface;
  
  @Output() onClickRestar: EventEmitter<any> = new EventEmitter();
  @Output() onClickSumar: EventEmitter<any> = new EventEmitter();
  
  @ViewChild('elementoContenedorZoom', {static: false}) elementoContenedorZoom;
  @ViewChild('elementoImagenZoom', {static: false}) elementoImagenZoom;
    
  onMouseMove(evento) {
    const elementoContenedorZoom = this.elementoContenedorZoom.nativeElement;
    const elementoImagenZoom = this.elementoImagenZoom.nativeElement;
    
    let desplazamientoContenedorX = evento.clientX - elementoContenedorZoom.offsetLeft;
    let porcentajeX = desplazamientoContenedorX/(elementoContenedorZoom.offsetWidth - 2);
    let desplazamientoImagenX = `${-1*elementoImagenZoom.offsetWidth*porcentajeX}px`;
    
    let desplazamientoContenedorY = evento.clientY - elementoContenedorZoom.offsetTop;
    let porcentajeY = desplazamientoContenedorY/(elementoContenedorZoom.offsetHeight - 2);
    let desplazamientoImagenY = `${-1*elementoImagenZoom.offsetHeight*porcentajeY}px`;
    
    elementoImagenZoom.style.transform = `translate(${desplazamientoImagenX}, ${desplazamientoImagenY})`;
  }
  
  onMouseLeave(evento) {
    this.elementoImagenZoom.nativeElement.style.transform = 'none';
  }
  
}
