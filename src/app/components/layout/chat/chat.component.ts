import { Component } from '@angular/core';

@Component({
  selector: 'bodoquin-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  
  chatVisible: boolean = false;
  
  mostrarOcultarChat() {
    this.chatVisible = !this.chatVisible;
    
    
  }
  
}