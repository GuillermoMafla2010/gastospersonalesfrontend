import { Injectable , EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Cuotas } from '../modelos/Cuotas';

@Injectable({
  providedIn: 'root'
})
export class CuotasService {

  public cuota: Cuotas;
  private url = "https://escuelajailuba.website/gastos/personal/api/cuotas"//''http://localhost:8000/api/cuotas';
  private  _notificarupload=new EventEmitter <any>();
  private  _deleteupload=new EventEmitter <any>();
  
  constructor(private http: HttpClient) { }

  get notificarupload():EventEmitter<any>{
    return this._notificarupload;
  }

  get deleteupload():EventEmitter<any>{
    return this._deleteupload;
  }

  //Obtiene una cuota por el deuda Id
  getCuotas(id): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  postCuotas(cuota): Observable<any> {
    return this.http.post<any>(this.url, cuota);
  }

  deleteCuota(id): Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`);
  }




}
