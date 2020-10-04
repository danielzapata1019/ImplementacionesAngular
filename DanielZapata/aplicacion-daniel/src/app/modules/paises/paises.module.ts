import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { PaisesRoutingModule } from './paises-routing.module';
import { InicioComponent } from 'src/app/components/pages/inicio/inicio.component';
import { FormularioComponent } from 'src/app/components/pages/formulario/formulario.component';
import { RegistrosComponent } from 'src/app/components/pages/registros/registros.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InicioComponent, FormularioComponent, RegistrosComponent],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class PaisesModule { }
