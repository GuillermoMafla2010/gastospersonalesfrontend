import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeudaService } from 'src/app/servicios/deuda.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-deudas',
  templateUrl: './deudas.page.html',
  styleUrls: ['./deudas.page.scss'],
})
export class DeudasPage implements OnInit {

  deuda:[]
  constructor(private router:Router,private deudaservice:DeudaService,public alertController: AlertController) { }

  ngOnInit() {
    this.getDeudas()
    this.deudaservice.notificarupload.subscribe(()=>{
      this.getDeudas()
    })
  }

  async presentAlert(id) {
    this.deudaservice.getDeudaId(id).subscribe(x=>{
      x.map(async y=>{
        const alert = await this.alertController.create({
      
          header: 'Detalle de la Deuda' ,
          
          message: '<br>'+'<strong> Nombre </strong>:' + y.nombre_deuda + '<br><hr>' 
          + '<strong>Cantidad $</strong>'+  y.cantidad           + '<br><hr>' + 
          '<strong> Fecha de Compra  </strong> ' + y.fecha +  '\n\n'
          ,
          buttons: [{
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Marcar como Pagado',
            handler: () => {
              this.deudaservice.deleteDeuda(y.id).subscribe(x=>{
                console.log("Actualizado")
                this.getDeudas()
              })
            }
          }]
        });
    
        await alert.present();
      })
    })
    
  }

  getDeudas(){
    /*this.deudaservice.getDeudasPorId(3).subscribe(x=>{
      this.deuda=x
      console.log(x)
    })*/
    this.deudaservice.getDeudasPorId(1).subscribe(x=>{
      this.deuda=x.deudas
      console.log(x)
    })

    
  
  }

  
  creardeuda(){
    this.router.navigate(['tabs/crear-deuda']);
  }

}
