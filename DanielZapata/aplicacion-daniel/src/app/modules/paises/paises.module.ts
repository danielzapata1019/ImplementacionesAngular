import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { InicioComponent } from 'src/app/components/pages/inicio/inicio.component';
import { FormularioComponent } from 'src/app/components/pages/formulario/formulario.component';
import { RegistroComponent } from 'src/app/components/pages/registro/registro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InicioComponent, FormularioComponent, RegistroComponent],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    RouterModule
  ]
})
export class PaisesModule { }
