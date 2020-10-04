import { Component, OnInit, Input } from '@angular/core';
import { Pais } from '../../../models/interfaces/Pais';
import { ApiService } from '../../../services/api.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  objEntidad: Pais;
  constructor(private _apiServices: ApiService) {
    this.objEntidad = {
      idPais: 0,
      codigo: '',
      nombre: '',
      activo: true,
    };
  }

  ngOnInit(): void {}

  onCreate() {
    console.log('ObjEntidad', JSON.stringify(this.objEntidad));
    this._apiServices.InsertarPais(this.objEntidad).subscribe();
  }
}
