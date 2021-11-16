import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  isMenuOpen: boolean = false;
  
  onClickMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
}
