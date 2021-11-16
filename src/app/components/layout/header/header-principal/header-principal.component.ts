import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bodoquin-header-principal',
  templateUrl: './header-principal.component.html',
  styleUrls: ['./header-principal.component.scss']
})
export class HeaderPrincipalComponent {
  
  @Output() onClickMenu: EventEmitter<any> = new EventEmitter();
  
}