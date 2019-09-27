import { AhorrosService } from './../../../servicios/ahorros.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-ahorros-vergastos',
  templateUrl: './ahorros-vergastos.page.html',
  styleUrls: ['./ahorros-vergastos.page.scss'],
})
export class AhorrosVergastosPage implements OnInit {

  public gastos
  constructor(private statusBar: StatusBar,private ar:ActivatedRoute,private ahorroservice:AhorrosService,public alertController: AlertController) {

    this.statusBar.backgroundColorByHexString('#fafaf7');
     }

  ngOnInit() {
    this.getGastos()
    
  }

  getGastos(){
    this.ar.params.subscribe(x=>{
      console.log(x.id)
      this.ahorroservice.getcuentabanco(1,x.id).subscribe(y=>{
          console.log(y)
         y.datos.map(z=>{
           this.gastos=z.cgastos
            console.log(z.cgastos)
         })
          
      })
    })

  }

  async delete(id) {
    const alert = await this.alertController.create({
      header: 'Seguro deseas eliminar el ingreso',
      message: 'No se podra revertir esta accion',
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
            this.ahorroservice.eliminarCgasto(id).subscribe(x=>{
              console.log("Eliminado")
              this.getGastos()
              this.ahorroservice.notificargastodelete.emit(this.gastos)
            })
          }
        }
      ]
    });

    await alert.present();
  }


}
