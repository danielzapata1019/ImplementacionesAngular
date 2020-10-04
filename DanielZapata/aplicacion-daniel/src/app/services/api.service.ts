import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../models/interfaces/Pais';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url_api = 'https://apienvalsaqa.azurewebsites.net/api/v1/Pais';
  postId: any;
  constructor(private _http: HttpClient) {}

  ObtenerPaises(): Observable<Pais[]> {
    return this._http.get<Pais[]>(this.url_api);
  }

  /*InsertarPais(pais: Pais): Observable<any> {
    console.log("pais", pais);
    var body = JSON.stringify(pais);
    console.log("Body", body);
    return this._http.post<any>(this.url_api, body, httpOptions);
  }*/

  InsertarPais(pais$: Pais): Observable<Pais> {
    console.log(pais$);
   return this._http.post<Pais>(this.url_api, pais$, httpOptions);
  }
}
