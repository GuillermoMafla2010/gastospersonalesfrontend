import { cgastos } from './../modelos/CGastos';
import { cingresos } from './../modelos/CIngresos';
import { Injectable ,EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AhorrosService {

  //"https://escuelajailuba.website/gastos/personal/api/categoriasgastos"

  private url="https://escuelajailuba.website/gastos/personal/api/cuentas"//"http://localhost:8000/api/cuentas";//
  private urlbanco ="https://escuelajailuba.website/gastos/personal/api/bancos"//"http://localhost:8000/api/bancos"//
  private urlcingresos="https://escuelajailuba.website/gastos/personal/api/cingresos"//"http://localhost:8000/api/cingresos"////
  private urlcgastos="https://escuelajailuba.website/gastos/personal/api/cgastos"//"http://localhost:8000/api/cgastos"////
  private  _notificarupload=new EventEmitter <any>();
  private  _notificardelete=new EventEmitter <any>();
  private  _notificargastoupload=new EventEmitter <any>();
  private  _notificargastodelete=new EventEmitter <any>();


  private cingreso:cingresos
  private cgasto:cgastos
  constructor(private http:HttpClient) { }

  get notificarupload():EventEmitter<any>{
    return this._notificarupload;
  }

  get notificardelete():EventEmitter<any>{
    return this._notificardelete;
  }

  get notificargastoupload():EventEmitter<any>{
    return this. _notificargastoupload;
  }

  get notificargastodelete():EventEmitter<any>{
    return this. _notificargastodelete;
  }

  getCuentas():Observable<any>{
    return this.http.get<any>(this.url);
  }

  //Se obtiene la cuenta por el id de un usuario
  getCuentasPorId(id:number):Observable<any>{
    return this.http.get<any>(`${this.url}/${id}`);
  }

  getcuentabanco(user_id:number,banco_id:number){
    return this.http.get<any>(`https://escuelajailuba.website/gastos/personal/api/cuentasusuario/${user_id}/${banco_id}`)
  }

  getcuentaid(cuenta_id:number){
    return this.http.get<any>(`https://escuelajailuba.website/gastos/personal/api/cuentabanco/${cuenta_id}`)
  }

  getBancosPorId(id:number):Observable<any>{
    return this.http.get<any>(`${this.urlbanco}/${id}`)
  }

  getCingresos(id:number):Observable<any>{
    return this.http.get<any>(`${this.urlcingresos}/${id}`)
  }

  getCgastos(id:number):Observable<any>{
    return this.http.get<any>(`${this.urlcgastos}/${id}`)
  }
  
  crearCingreso(cingreso:cingresos):Observable<any>{
    return this.http.post<any>(this.urlcingresos,cingreso);
  }

  eliminarCingreso(id){
    return this.http.delete<any>(`${this.urlcingresos}/${id}`)

  }

  crearCgasto(cgasto:cgastos){
    return this.http.post<any>(this.urlcgastos,cgasto)
  }

  eliminarCgasto(id):Observable<any>{
    return this.http.delete<any>(`${this.urlcgastos}/${id}`)
  }

 
  
}
