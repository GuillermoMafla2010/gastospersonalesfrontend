import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriagastoService {

  private url="https://escuelajailuba.website/gastos/personal/api/categoriasgastos"//"http://localhost:8000/api/categoriasgastos"
  constructor(private http:HttpClient) { }

  getcategorias():Observable<any>{
    return this.http.get<any>(this.url);
  }
}
