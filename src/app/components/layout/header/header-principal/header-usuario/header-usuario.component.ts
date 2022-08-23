import { Component } from '@angular/core';
import { UsuarioInterface } from 'src/app/core/interfaces/usuario.interface';

@Component({
  selector: 'bodoquin-header-usuario',
  templateUrl: './header-usuario.component.html',
  styleUrls: ['./header-usuario.component.scss']
})
export class HeaderUsuarioComponent {

  showPopup: boolean = false;
  showModalIniciarSesion: boolean = false;
  showModalRegistrarse: boolean = false;
  showModalCerrarSesion: boolean = false;
  
  usuario: UsuarioInterface = {};
  
  onClickUser() {
    this.showPopup = true;  
  }
  
  mostrarModalInicioSesion() {
    this.showModalIniciarSesion = true;
    this.showPopup = false;
  }  
  
  mostrarModalRegistrarse() {
    this.showModalRegistrarse = true;
    this.showPopup = false;
  }  
  
  mostrarModalCerrarSesion() {
    this.showModalCerrarSesion = true;
    this.showPopup = false;
  }
  
  iniciarSesion() {
    if(!this.usuario.username) {
      alert('debe ingresar el nombre del usuario, es obligatorio');
      return;
    }
    
    if(this.usuario.username.length < 4) {
      alert('debe ingresar el nombre del usuario con el formato correcto');
      return;
    }
    
    if(!this.usuario.password) {
      alert('debe ingresar el password');
      return;
    }
    
    if(this.usuario.password.length < 8 ||
       !this.usuario.password.includes('@')
    ) {
      alert('debe ingresar el password con el formato correcto');
      return;
    }
    
    alert('ok');
  }
}