import { 
  Component, 
  Input,
  Output,
  TemplateRef,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'bodoquin-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent  {
  
  @Input() titulo: string; 
  @Input() showAceptar: boolean = true; 
  @Input() showCancelar: boolean = true;
  @Input() size: string = 'sm';
  
  @Input() showModal: boolean = false;
  @Output() showModalChange: EventEmitter<boolean> = new EventEmitter();
  
  @Input() templateHeader: TemplateRef<any>;
  @Input() templateBody: TemplateRef<any>;
  @Input() templateFooter: TemplateRef<any>;
  
  mostrarOcultarModal() {
    this.showModal = false;
    this.showModalChange.emit(this.showModal);
  }
}