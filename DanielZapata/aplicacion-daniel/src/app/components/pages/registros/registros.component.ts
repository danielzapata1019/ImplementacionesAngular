import { ParseSourceFile } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Pais } from '../../../models/interfaces/Pais';
import { ApiService } from '../../../services/api.service';
@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss'],
})
export class RegistrosComponent implements OnInit {
  constructor(private _apiServices: ApiService) {}

  paises: Pais[] = [];

  ngOnInit(): void {
    this._apiServices.ObtenerPaises().subscribe((respuesta: Pais[]) => {
      console.log(respuesta);
      this.paises = respuesta;
    });
  }
}
