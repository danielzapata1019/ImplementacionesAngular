import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { BodyComponent } from './layout/body/body.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PaisesModule } from './modules/paises/paises.module';
import { RouterModule } from '@angular/router';
import { TituloComponent } from './components/titulo/titulo.component';
import { PaisesRoutingModule } from './modules/paises/paises-routing.module';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    TituloComponent,
  ],
  imports: [
    BrowserModule,
    PaisesModule,
    RouterModule,
    AppRoutingModule,
    PaisesRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
