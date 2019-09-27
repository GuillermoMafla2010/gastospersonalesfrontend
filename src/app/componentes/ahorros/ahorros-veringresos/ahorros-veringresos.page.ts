import { AhorrosService } from './../../../servicios/ahorros.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';




@Component({
  selector: 'app-ahorros-veringresos',
  templateUrl: './ahorros-veringresos.page.html',
  styleUrls: ['./ahorros-veringresos.page.scss'],
})
export class AhorrosVeringresosPage implements OnInit {

  public ingresos=[]
  constructor(private statusBar: StatusBar,private ar:ActivatedRoute,private ahorroservice:AhorrosService,private router:Router,public alertController: AlertController
    ) {
      this.statusBar.backgroundColorByHexString('#fafaf7');
      
     }

  ngOnInit() {

   this.getIngresos()

    
    
  }


  getIngresos(){
    this.ar.params.subscribe(x=>{
      console.log(x.id)
      this.ahorroservice.getcuentabanco(1,x.id).subscribe(y=>{
        
        y.datos.map(z=>{
          this.ingresos=z.cingresos
        })
    })
  })
  }

  


  pantallacrear(id){
    this.router.navigate(['tabs/crearahorroingreso',id])
  }


 /* delete(id){
    this.ahorroservice.eliminarCingreso(id).subscribe(x=>{
      console.log("Eliminado")
    })
  }*/

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
            this.ahorroservice.eliminarCingreso(id).subscribe(x=>{
              console.log("Eliminado")
              this.getIngresos()
              this.ahorroservice.notificardelete.emit(this.ingresos)
            })
          }
        }
      ]
    });

    await alert.present();
  }

  

}
