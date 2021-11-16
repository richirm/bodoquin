import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'bodoquin-inicio-carousel',
  templateUrl: './inicio-carousel.component.html',
  styleUrls: ['./inicio-carousel.component.scss']
})
export class InicioCarouselComponent implements OnInit {
  
  @ViewChild('elementoCarousel', {static: false}) elementoCarousel;
  @ViewChild('elementoPasos', {static: false}) elementoPasos;

  posicionBannerActual: number = 1;
  
  intervaloBanner: ReturnType<typeof setInterval>;
  timeoutBanner: ReturnType<typeof setTimeout>;
  
  posicionInicial: number;
  carouselEnMovimiento: boolean = false;
  
  ngOnInit() {
    this.contruirJobBanner();
  }
  
  mostrarBanner(posicionBannerSeleccionado) {
    clearInterval(this.intervaloBanner);
    this.elementoCarousel.nativeElement.classList.add('inicio-carousel_banners--transicion');
    
    this.elementoPasos.nativeElement.querySelector(`:nth-child(${this.posicionBannerActual})`).classList.remove('seleccionado');
    
    const desplazamientoCarousel = (posicionBannerSeleccionado - 1) * -100;
    this.elementoCarousel.nativeElement.style.left = `${desplazamientoCarousel}%`;
    this.posicionBannerActual = posicionBannerSeleccionado;
    
    this.elementoPasos.nativeElement.querySelector(`:nth-child(${posicionBannerSeleccionado})`).classList.add('seleccionado');
    
    clearTimeout(this.timeoutBanner);
    
    this.timeoutBanner = setTimeout(() => {
      this.elementoCarousel.nativeElement.classList.remove('inicio-carousel_banners--transicion');
      this.contruirJobBanner();
    }, 0.5 * 1000);
  }
  
  mostrarSiguienteBanner() {
    if(this.posicionBannerActual === 4) {
      this.mostrarBanner(1);
    } else {
      this.mostrarBanner(this.posicionBannerActual + 1);
    }
  }
  
  mostrarAnteriorBanner() {
    if(this.posicionBannerActual === 1) {
      this.mostrarBanner(4);
    } else {
      this.mostrarBanner(this.posicionBannerActual - 1);
    }
  }
  
  contruirJobBanner() {
    this.intervaloBanner = setInterval(() => {
      this.mostrarSiguienteBanner();
    }, 3 * 1000);
  }
  
  iniciarDesplazamientoCarousel(evento) {
    clearInterval(this.intervaloBanner);
    
    this.carouselEnMovimiento = true;
    this.posicionInicial = evento.clientX;
  }
  
  moverDesplazamientoCarousel(evento) {
    if(this.carouselEnMovimiento) {
      const posicionFinal = evento.clientX;
      const desplazamientoCursor = posicionFinal - this.posicionInicial;
      const desplazamientoCarousel = (this.posicionBannerActual - 1) * -100;
      this.elementoCarousel.nativeElement.style.left = `calc(${desplazamientoCarousel}% + ${desplazamientoCursor}px)`;
    }
  }
  
  finalizarDesplazamientoCarousel(evento) {
    const posicionFinal = evento.clientX;
    const desplazamientoCursor = posicionFinal - this.posicionInicial;
    this.carouselEnMovimiento = false;
    
    if(desplazamientoCursor > 300) {
      this.mostrarAnteriorBanner();
    } else if(desplazamientoCursor < -300) {
      this.mostrarSiguienteBanner();
    } else {
      this.mostrarBanner(this.posicionBannerActual);
    }
  }
  
  cancelarDesplazamientoDragDrop(evento) {
    evento.preventDefault();
  }
  
}