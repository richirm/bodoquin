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
      flecha.style.right = `${window.innerWidth - left - 45}px`;
      flecha.style.top = `calc(${top}px + 45px)`;
    }
  }
  
  closePopup() {
    this.showPopup = false;
    this.showPopupChange.emit(this.showPopup);
  }
  
}
