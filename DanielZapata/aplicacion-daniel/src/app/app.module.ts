import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { BodyComponent } from './layout/body/body.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PaisesModule } from './modules/paises/paises.module';
import { RouterModule } from '@angular/router';
import { TituloComponent } from './components/titulo/titulo.component';
import { PaisesRoutingModule } from './modules/paises/paises-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    TituloComponent,
  ],
  imports: [BrowserModule, PaisesModule, RouterModule, PaisesRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
