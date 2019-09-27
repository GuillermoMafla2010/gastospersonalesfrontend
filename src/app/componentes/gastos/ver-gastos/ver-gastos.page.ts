import { Gastos } from './../../../modelos/Gastos';
import { Router, ActivatedRoute } from '@angular/router';
import { GastosService } from './../../../servicios/gastos.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ver-gastos',
  templateUrl: './ver-gastos.page.html',
  styleUrls: ['./ver-gastos.page.scss'],
})
export class VerGastosPage implements OnInit {

  public parcialgastos=[]
  public totalgastos=0.0
  public gastos:any
  constructor(private gastoservice:GastosService,
    private router:Router,
    private activatedroute:ActivatedRoute,
    public toastController: ToastController,
    public alertController: AlertController,
    private statusBar: StatusBar) { 
      this.statusBar.backgroundColorByHexString('#fafaf7');
    }

  ngOnInit() {
    this.getGastos()

    this.gastoservice.notificarUpdate.subscribe(update=>{
      /*console.log(update)
      this.gastos=this.gastos.map(original=>{
        console.log(original)
        if(update.id==original.id){
          original=update
        }
        return original
      })*/
      this.getGastos()
    })

    this.gastoservice.notificarPost.subscribe(post=>{
    
      
  
      

      
     this.getGastos()
      
      
    })

   




  
  }


  async presentAlertConfirm(id) {
    const alert = await this.alertController.create({
      header: 'Eliminar Gasto',
      message: 'Se eliminara permanentemente de la lista',
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
            this.gastoservice.deleteGasto(id).subscribe(x=>{
              console.log(x)
              this.getGastos()
              this.gastoservice.notificarDelete.emit(this.gastos);
            })
          }
        }
      ]
    });

    await alert.present();
  }



  getGastos(){
    
    this.gastoservice.getGastos(1).subscribe(x=>{
      this.gastos=x.gastos
      this.totalgastos=x.suma
    })

    
    
  }

 

  update(id){
    console.log(id)
    this.router.navigate(['tabs/editar-gastos',id])

  }
  
  delete(id){
    console.log(id)
    this.presentAlertConfirm(id)
    
    
  }


  

}
