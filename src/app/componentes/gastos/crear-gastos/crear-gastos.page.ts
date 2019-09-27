import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { CategoriagastoService } from './../../../servicios/categoriagasto.service';
import { Gastos } from './../../../modelos/Gastos';
import { GastosService } from './../../../servicios/gastos.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import swal from 'sweetalert2'

@Component({
  selector: 'app-crear-gastos',
  templateUrl: './crear-gastos.page.html',
  styleUrls: ['./crear-gastos.page.scss'],
})
export class CrearGastosPage implements OnInit {

  public gasto:Gastos=new Gastos()
  public categorias=[]
  constructor(private gastoservice:GastosService,
              private categoria:CategoriagastoService,
              private router:Router,
              private datePipe:DatePipe,
              public toastController: ToastController,
              private statusBar: StatusBar) { 
                this.statusBar.backgroundColorByHexString('#fafaf7');
              }

  ngOnInit() {
    this.getCategorias()
  }

  getCategorias(){
    this.categoria.getcategorias().subscribe(x=>{
      this.categorias=x
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se agrego el gasto',
       duration:1000
    });
    toast.present();
  }

  guardar(){
    this.gasto.user_id=1
    this.gasto.fecha=this.datePipe.transform(this.gasto.fecha,"yyyy-MM-dd")
    this.gastoservice.postGasto(this.gasto).subscribe(x=>{
      console.log(x)
      
      this.gastoservice.notificarPost.emit(this.gasto)
    this.router.navigate(['tabs/ver-gastos'])
    
        this.gasto.user_id=null;
        this.gasto.nombre_gasto="";
        this.gasto.fecha="";
        this.gasto.cantidad_gasto=null;
        this.gasto.categoria_id=null

      this.presentToast()

      
    

      

    })

    
    
  }

  

}
