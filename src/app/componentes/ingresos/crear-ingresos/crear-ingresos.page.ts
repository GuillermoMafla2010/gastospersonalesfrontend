import { formatDate, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { IngresosService } from './../../../servicios/ingresos.service';
import { Ingresos } from './../../../modelos/Ingresos';
import { Component, OnInit } from '@angular/core';
import {CategoriaingresoService} from 'src/app/servicios/categoriaingreso.service';
import swal from 'sweetalert2'
import { ToastController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-crear-ingresos',
  templateUrl: './crear-ingresos.page.html',
  styleUrls: ['./crear-ingresos.page.scss'],
})
export class CrearIngresosPage implements OnInit {

  public ingresos:Ingresos=new Ingresos
  public categorias=[]
  constructor(private categoriaservice:CategoriaingresoService,
    private ingresoservice:IngresosService,
    private router:Router,
    private datePipe:DatePipe,
    public toastController: ToastController,
    private statusBar: StatusBar) { 
      this.statusBar.backgroundColorByHexString('#fafaf7');
    }

  ngOnInit() {
    this.getcategorias()
  }

  getcategorias(){
    this.categoriaservice.getcategorias().subscribe(x=>{
      this.categorias=x
      console.log(this.categorias)
    })

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Ingreso Agregado',
      duration: 2000
    });
    toast.present();
  }

  guardar(){
    this.ingresos.user_id=1
    this.ingresos.fecha=this.datePipe.transform(this.ingresos.fecha,"yyyy-MM-dd")
    console.log(this.ingresos)
    this.ingresoservice.postIngresos(this.ingresos).subscribe(x=>{
      console.log("Ingreso Registrado")
      //swal.fire("Ingreso Creado",`Se registro el ingreso correctamente`,"success")
      
      this.router.navigate(['tabs/ver-ingresos'])
      this.ingresoservice.notificarPost.emit(this.ingresos)
      this.presentToast()
      
      this.ingresos.nombre_ingreso="";
      this.ingresos.cantidad_ingreso=null;
      this.ingresos.categoria_id=null
      this.ingresos.fecha=null
      

    })
  }

}
