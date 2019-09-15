import { ToastController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Consulta } from './../../../modelos/Consulta';
import { CategoriagastoService } from './../../../servicios/categoriagasto.service';

import { GastosService } from './../../../servicios/gastos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-gastos-fecha',
  templateUrl: './ver-gastos-fecha.page.html',
  styleUrls: ['../../ingresos/ver-ingresos-fecha/ver-ingresos-fecha.page.scss'],
})
export class VerGastosFechaPage implements OnInit {

  public categoria=[]
public consulta:Consulta=new Consulta;
public resultado:any
public suma:any
  constructor(private ingresoservice:GastosService,
  private categorias:CategoriagastoService,
  private datePipe:DatePipe,
  public toastController: ToastController) { }

  ngOnInit() {
    this.getcategorias();
    
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'No se encontraron registros',
      duration: 2000
    });
    toast.present();
  }

  getcategorias(){
    this.categorias.getcategorias().subscribe(x=>{
      console.log(x)
      this.categoria=x
    })
  }

  guardar(){
    this.consulta.user_id=1
    this.consulta.fecha_inicio=this.datePipe.transform(this.consulta.fecha_inicio,"yyyy-MM-dd")
    this.consulta.fecha_fin=this.datePipe.transform(this.consulta.fecha_fin,"yyyy-MM-dd")
    console.log(this.consulta)
    this.ingresoservice.getfechas(this.consulta.user_id,this.consulta.fecha_inicio,this.consulta.fecha_fin,this.consulta.categoria).subscribe(x=>{
      console.log(x);
      this.resultado=x.data
      this.suma=x.suma

      if(this.resultado.length==0){
        this.presentToast();
      }
    })

  }

}



