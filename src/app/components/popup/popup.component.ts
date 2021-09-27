import { Component, Input, TemplateRef, Output, EventEmitter, ElementRef, OnInit, OnChanges, SimpleChanges, HostListener } from '@angular/core';

@Component({
  selector: 'bodoquin-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit, OnChanges {
  
  @Input() elemento: HTMLElement;
  @Input() align: string = 'bottom';
  @Input() showFlecha: boolean = true;
  @Input() showCerrar: boolean = false;
  @Input() showBackdrop: boolean = true;
  @Input() heightBody: string;

  @Input() showPopup: boolean = false;
  @Output() showPopupChange: EventEmitter<boolean> = new EventEmitter();
  
  @Input() templateHeader: TemplateRef<any>;
  @Input() templateBody: TemplateRef<any>;
  @Input() templateFooter: TemplateRef<any>;
  
  timeoutCerrar; 
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calcPositionPopup();
  }

  constructor(
    private el: ElementRef) {}
  
  ngOnInit() {
    this.calcPositionPopup();
  }

  ngOnChanges(changes: SimpleChanges ) {
    if(changes.showPopup){
      this.calcPositionPopup();
      this.calcAlturaPopup();
    }
  }

  calcPositionPopup() {
    let left = this.elemento.getBoundingClientRect().left;
    let top = this.elemento.getBoundingClientRect().top;
    
    let contenedor = this.el.nativeElement.querySelector('.popup_contenedor');
    contenedor.style.right = `calc(${window.innerWidth - left}px - 50px)`;
    
    if(this.align === 'bottom') {
      contenedor.style.top = `calc(${top}px + 52px)`;
    } else if(this.align === 'top') {
      contenedor.style.top = `auto`;
      contenedor.style.bottom = `${window.innerHeight - top + 10}px`;
    }
    
    if(this.showFlecha === true) {
      let flecha = this.el.nativeElement.querySelector('.popup_flecha');
      let ajusteFlecha = 
        (document.querySelector('body').offsetHeight > window.innerHeight) 
            ? 45 
            : 28;
      
      flecha.style.right = `${window.innerWidth - left - ajusteFlecha}px`;
      flecha.style.top = `calc(${top}px + 45px)`;
    }
  }
  
  calcAlturaPopup() {
    clearTimeout(this.timeoutCerrar);
    const contenedor = this.el.nativeElement.querySelector('.popup_contenedor');
    if(this.showPopup === true) {
      contenedor.style.height = 'auto';
      contenedor.style.minHeight = 'auto';
    } else { 
      this.timeoutCerrar = setTimeout(() => {
        contenedor.style.height = 0;
        contenedor.style.minHeight = 0;
      }, 0.3 * 1000);     
    }
  }
  
  closePopup() {
    this.showPopup = false;
    this.showPopupChange.emit(this.showPopup);
  }
  
}
