import { Ingresos } from './../modelos/Ingresos';
import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IngresosService {

  private ingresos:Ingresos
  private url="https://escuelajailuba.website/gastos/personal/api/ingresos"//"http://localhost:8000/api/ingresos"//"https://escuelajailuba.website/gastos/api/ingresos"//
  private url1="https://escuelajailuba.website/gastos/personal/api/veringreso"//"http://localhost:8000/api/veringreso"//"https://escuelajailuba.website/gastos/api/veringreso"//
  private url2="https://escuelajailuba.website/gastos/personal/api/verfechaingresos"//"http://localhost:8000/api/verfechaingresos";
  private url3="http://personaliza.kiaecuador.com.ec/api/ApcMdCmr/VmSlAmd"
  private _notificarUpdate = new EventEmitter<any>();
  private _notificarPost = new EventEmitter<any>();
  private _notificarDelete = new EventEmitter<any>();
  constructor(private http:HttpClient) { }

  get notificarUpdate():EventEmitter<any>{
    return this._notificarUpdate
  }

  get notificarPost():EventEmitter<any>{
    return this._notificarPost
  }

  get notificarDelete():EventEmitter<any>{
    return this._notificarDelete
  }

  getIngresos(id:number):Observable<any>{
    return this.http.get<any>(`${this.url}/${id}`)
  }

  postIngresos(ingreso:Ingresos):Observable<any>{
    return this.http.post<any>(`${this.url}`,ingreso)
  }

  getIngresoPorId(id:number):Observable<any>{
    return this.http.get<any>(`${this.url1}/${id}`)
  }

  updateIngreso(ingresos:Ingresos){
    return this.http.put<any>(`${this.url}/${ingresos.id}`,ingresos);
  }

  deleteIngreso(id){
    return this.http.delete<any>(`${this.url}/${id}`)
  }

  getfechas(id,fecha_inicio,fecha_fin,categoria){
    return this.http.get<any>(`${this.url2}/${id}/${fecha_inicio}/${fecha_fin}/${categoria}`);
  }

  
}
