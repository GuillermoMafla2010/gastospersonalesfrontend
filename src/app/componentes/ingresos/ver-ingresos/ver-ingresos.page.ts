import { IngresosService } from './../../../servicios/ingresos.service';
import { Component, OnInit } from '@angular/core';
import {EditarIngresoPage} from '../editar-ingreso/editar-ingreso.page';
import { ModalController } from '@ionic/angular';
import {Router} from '@angular/router';

import { AlertController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-ver-ingresos',
  templateUrl: './ver-ingresos.page.html',
  styleUrls: ['./ver-ingresos.page.scss'],
})
export class VerIngresosPage implements OnInit {

  public ingresos=[]
  
  public suma=0
  constructor(private ingresoservice:IngresosService,public router:Router,public alertController: AlertController,
    private statusBar: StatusBar) {
      this.statusBar.backgroundColorByHexString('#fafaf7');
     }

  ngOnInit() {
    
    this.getIngresos()
    this.ingresoservice.notificarUpdate.subscribe(update=>{
      /*console.log(update)
      this.ingresos=this.ingresos.map(original=>{
        console.log(original)
        if(update.id==original.id){
          original=update
        }
        return original
      })*/
      this.getIngresos()
    })

    this.ingresoservice.notificarPost.subscribe(post=>{
      this.getIngresos()
    })

    

    
  }

  getIngresos(){
    
      this.ingresoservice.getIngresos(1).subscribe(x=>{
        this.ingresos=x.ingresos
        this.suma=x.suma
      })
      

      
  }

  async presentAlertConfirm(id) {
    const alert = await this.alertController.create({
      header: 'Eliminar ingreso',
      message: 'El registro se eliminara permanentemente',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Okay');
            this.ingresoservice.deleteIngreso(id).subscribe(x=>{
              console.log(x)
              this.getIngresos()
              this.ingresoservice.notificarDelete.emit(this.ingresos)
            })
          }
        }
      ]
    });

    await alert.present();
  }

  async update(id){
    console.log(id)
    this.router.navigate(['tabs/editar-ingresos',id])
    

  }

  delete(id){
    console.log(id)
    this.presentAlertConfirm(id)
    
    
    
    
  }

}
