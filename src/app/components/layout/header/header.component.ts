import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bodoquin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  @Output() onClickMenu: EventEmitter<any> = new EventEmitter();
  
}