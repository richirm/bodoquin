import { 
  Component, 
  Input, 
  OnChanges,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'bodoquin-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnChanges {
  
  @Input() isMenuOpen: boolean = false;
  @Output() isMenuOpenChange: EventEmitter<boolean> = new EventEmitter();
      
  ngOnChanges(changes) {
    if(changes.isMenuOpen && changes.isMenuOpen.previousValue !== undefined) {
      this.colapsarExpandirMenu();
    }
  }
  
  colapsarExpandirMenu() {
    if(this.isMenuOpen === true) {
      (document.querySelector('.nav_menu') as HTMLElement).classList.remove('colapsado');
      (document.querySelector('.nav_backdrop') as HTMLElement).style.display = 'block';
    } else {
      (document.querySelector('.nav_menu') as HTMLElement).classList.add('colapsado');
      (document.querySelector('.nav_backdrop') as HTMLElement).style.display = 'none';
    }
  }
  
  colapsarMenu() {
    this.isMenuOpen = false;
    this.isMenuOpenChange.emit(this.isMenuOpen);
  }
}