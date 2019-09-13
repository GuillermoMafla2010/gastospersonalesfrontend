import { Injectable,EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Deuda } from '../modelos/Deuda';


@Injectable({
  providedIn: 'root'
})
export class DeudaService {

  private deuda:Deuda;
  private url="http://localhost:8000/api/deudas"//"https://escuelajailuba.website/gastos/personal/api/deudas"//"http://localhost:8000/api/deudas"
  private url1="https://escuelajailuba.website/gastos/personal/api/verdeuda"//"http://localhost:8000/api/deudas"
  private  _notificarupload=new EventEmitter <any>();
  private  _deleteupload=new EventEmitter <any>();
  constructor(private http:HttpClient) { }

  get notificarupload():EventEmitter<any>{
    return this._notificarupload;
  }

  get deleteupload():EventEmitter<any>{
    return this._deleteupload;
  }

  getDeudas():Observable<any>{
      return this.http.get<any>(this.url);
  }

  //Devuelve las deudas de un usuario
  getDeudasPorId(id:number):Observable<any>{
    return this.http.get<any>(`${this.url}/${id}`);
}

  postDeudas(deuda:Deuda):Observable<any>{
    return this.http.post<any>(this.url,deuda);
  }

  getDeudaId(id:number):Observable<any>{
    return this.http.get<any>(`${this.url1}/${id}`)
  }

  

  deleteDeuda(id:number):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`);
  }

}
