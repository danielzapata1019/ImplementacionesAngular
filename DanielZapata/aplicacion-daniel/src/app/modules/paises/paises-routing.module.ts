import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from '../../components/pages/formulario/formulario.component';
import { RegistrosComponent } from 'src/app/components/pages/registros/registros.component';

const routes: Routes = [
   {
    path:"paises/registrarPais",
    component: FormularioComponent
  },
  {
    path:"paises/consultarPaises",
    component: RegistrosComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
