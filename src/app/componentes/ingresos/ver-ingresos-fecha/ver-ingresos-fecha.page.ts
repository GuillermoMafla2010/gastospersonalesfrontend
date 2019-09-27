import { Consulta } from './../../../modelos/Consulta';
import { Component, OnInit } from '@angular/core';
import { IngresosService } from './../../../servicios/ingresos.service';
import { CategoriaingresoService } from './../../../servicios/categoriaingreso.service';
import { formatDate, DatePipe } from '@angular/common';
import { ToastController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-ver-ingresos-fecha',
  templateUrl: './ver-ingresos-fecha.page.html',
  styleUrls: ['./ver-ingresos-fecha.page.scss'],
})
export class VerIngresosFechaPage implements OnInit {

public categoria=[]
public consulta:Consulta=new Consulta;
public resultado:any
public suma:any
  constructor(private ingresoservice:IngresosService,
  private categorias:CategoriaingresoService,
  private datePipe:DatePipe,
  public toastController: ToastController,
  private statusBar: StatusBar) { 
    this.statusBar.backgroundColorByHexString('#fafaf7');
  }

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
