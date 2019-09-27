import { AhorrosService } from './../../../servicios/ahorros.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-ahorros-opciones',
  templateUrl: './ahorros-opciones.page.html',
  styleUrls: ['./ahorros-opciones.page.scss'],
})
export class AhorrosOpcionesPage implements OnInit {


  public banco:any
  constructor(private statusBar: StatusBar,private ar:ActivatedRoute,private ahorroservice:AhorrosService,private router:Router,public alertController: AlertController) {
    this.statusBar.backgroundColorByHexString('#fafaf7');
   }

  ngOnInit() {
    this.ar.params.subscribe(x=>{

      console.log(x)
      this.ahorroservice.getcuentabanco(1,x.id).subscribe(y=>{
        
        this.banco=y.datos
        console.log(this.banco)
      })
    })
  }

  /*verIngreso(id){
    this.router.navigate(['tabs/ahorrosingresos',id])
  }

  verGasto(id){
    this.router.navigate(['tabs/ahorrosgastos',id])
  }*/


  

  async VerIngreso(id) {
    const alert = await this.alertController.create({
      header: 'Selecciona que opcion vas a hacer con los Ingresos',
      inputs: [
        
      ],
      buttons: [
        {
          text: 'Crear Ingreso',
          
          cssClass: 'primary',
          handler: () => {
            this.router.navigate(['tabs/crearahorroingreso',id])
          }
        }, 

        {
          text: 'Ver Ingresos',
         
          cssClass: 'primary',
          handler: () => {
            this.router.navigate(['tabs/ahorrosingresos',id])
          }
        }, 

      ]
    });

    await alert.present();
  }

  async VerGasto(id) {
    const alert = await this.alertController.create({
      header: 'Selecciona una opcion que vas a hacer con los gastos',
      inputs: [
        
      ],
      buttons: [
        {
          text: 'Crear Gastos',
          
          cssClass: 'secondary',
          handler: () => {
            this.router.navigate(['tabs/crearahorrogasto',id])
          }
        }, 

        {
          text: 'Ver Gastos',
          
          cssClass: 'secondary',
          handler: () => {
            this.router.navigate(['tabs/ahorrosgastos',id])
          }
        }, 

      ]
    });

    await alert.present();
  }


}
