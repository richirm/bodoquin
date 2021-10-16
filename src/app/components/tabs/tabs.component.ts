import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'bodoquin-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  @Input() titulos: Array<string>;
  @Input() templatesTabs: Array<TemplateRef<any>>;
  
  indexSeleccionado: number = 0;

  mostrarTab(index) {
    this.indexSeleccionado = index;
  }
}
