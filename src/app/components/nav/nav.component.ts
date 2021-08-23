import { 
  Component, 
  Input, 
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'bodoquin-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent  {
  
  @Input() isMenuOpen: boolean = false;
  @Output() isMenuOpenChange: EventEmitter<boolean> = new EventEmitter();
  
  colapsarMenu() {
    this.isMenuOpen = false;
    this.isMenuOpenChange.emit(this.isMenuOpen);
  }
}