import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { HeaderModule } from './components/header/header.module';
import { NavModule } from './components/nav/nav.module';
import { FooterModule } from './components/footer/footer.module';

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
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
