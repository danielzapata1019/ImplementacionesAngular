import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from '../../components/pages/inicio/inicio.component';
import { FormularioComponent } from '../../components/pages/formulario/formulario.component';
import { RegistroComponent } from 'src/app/components/pages/registro/registro.component';

const routes: Routes = [
  {
    path:"inicio",
    component : InicioComponent
  },
  {
    path:"formulario",
    component: FormularioComponent
  },
  {
    path:"registro",
    component: RegistroComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
