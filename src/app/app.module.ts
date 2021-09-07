import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { HeaderModule } from './components/layout/header/header.module';
import { NavModule } from './components/layout/nav/nav.module';
import { FooterModule } from './components/layout/footer/footer.module';
import { ChatModule } from './components/layout/chat/chat.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
