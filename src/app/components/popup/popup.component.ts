import { Component, Input, TemplateRef, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'bodoquin-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  
  @Input() elemento: HTMLElement;
  
  @Input() showPopup: boolean = false;
  @Output() showPopupChange: EventEmitter<boolean> = new EventEmitter();
  
  @Input() templateHeader: TemplateRef<any>;
  @Input() templateBody: TemplateRef<any>;
  @Input() templateFooter: TemplateRef<any>;
  
  constructor(
    private el: ElementRef) {}
  
  ngOnInit() {
    this.calcPositionPopup();
  }
  
  calcPositionPopup() {
    let left = this.elemento.getBoundingClientRect().left;
    let top = this.elemento.getBoundingClientRect().top;
    
    let contenedor = this.el.nativeElement.querySelector('.popup_contenedor');
    contenedor.style.left = `${left}px`;
    contenedor.style.top = `calc(${top}px + 52px)`;
    
    let flecha = this.el.nativeElement.querySelector('.popup_flecha');
    flecha.style.left = `${left}px`;
    flecha.style.top = `calc(${top}px + 45px)`;
  }
  
  closePopup() {
    this.showPopup = false;
    this.showPopupChange.emit(this.showPopup);
  }
  
}
