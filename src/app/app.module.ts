import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Components
import { HeaderModule } from './components/layout/header/header.module';
import { NavModule } from './components/layout/nav/nav.module';
import { FooterModule } from './components/layout/footer/footer.module';
import { ChatModule } from './components/layout/chat/chat.module';

//Services
import { AuthService } from './core/services/auth.service';
import { CarritoService } from './core/services/carrito.service';

// Guards
import { AuthGuard } from './core/guards/auth.guard'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    
    //Components
    HeaderModule,
    NavModule,
    FooterModule,
    ChatModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    AuthService,
    CarritoService,
    
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
