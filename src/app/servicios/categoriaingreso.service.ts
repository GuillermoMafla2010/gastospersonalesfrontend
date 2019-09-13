import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriaingresoService {

  private url="https://escuelajailuba.website/gastos/personal/api/categoriasingresos"//"http://localhost:8000/api/categoriasingresos"
  constructor(private http:HttpClient) { }

  getcategorias():Observable<any>{
    return this.http.get<any>(this.url);
  }
  
}
