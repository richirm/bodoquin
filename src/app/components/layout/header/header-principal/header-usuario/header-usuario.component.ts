import { Component } from '@angular/core';

@Component({
  selector: 'bodoquin-header-usuario',
  templateUrl: './header-usuario.component.html',
  styleUrls: ['./header-usuario.component.scss']
})
export class HeaderUsuarioComponent {

  showPopup: boolean = false;
  showModalIniciarSesion: boolean = false;
  
  onClickUser() {
    this.showPopup = true;  
  }
  
  mostrarModalInicioSesion() {
    this.showModalIniciarSesion = true;
    this.showPopup = false;
  }
}