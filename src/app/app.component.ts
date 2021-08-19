import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  isClickedMenu: boolean = false;
  
  onClickMenu() {
    this.isClickedMenu = true;
  }
  
}
