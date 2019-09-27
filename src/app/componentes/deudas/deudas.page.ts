import { CuotasService } from './../../servicios/cuotas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeudaService } from 'src/app/servicios/deuda.service';
import { AlertController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-deudas',
  templateUrl: './deudas.page.html',
  styleUrls: ['./deudas.page.scss'],
})
export class DeudasPage implements OnInit {

  deuda=[];
  total_deuda: []=[];
  sumatotal=0.0;
  constructor(private cuotaservice:CuotasService ,private statusBar: StatusBar,private router:Router,private deudaservice:DeudaService,public alertController: AlertController) {

    this.statusBar.backgroundColorByHexString('#fafaf7');
     }

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
   
    this.deudaservice.notificarupload.subscribe((x)=>{
      if(this.deuda.length>1){
        this.deuda=[]
      this.getDeudas()

      }
      

    })

    this.deudaservice.deleteupload.subscribe(x=>{
      if(this.deuda.length>1){
        this.deuda=[]
      this.getDeudas()

      }
          })

    

    this.deudaservice.getDeudasPorId(1).subscribe(x=>{
    
     x.deudas.map(y=>{
      this.deudaservice.getDeudaId(y.id).subscribe(z=>{
       
       this.deuda.push(z)
       this.deuda.map(a=>{
         console.log(a)
         if(a.suma==0){
           a.deudas.map(b=>{
             this.deudaservice.deleteDeuda(b.id).subscribe(c=>{
               console.log("Deuda Eliminada")
             })
           })
         }

         if(a.suma>0){
           console.log("Deuda por pagar")
         }
       })
       
      })
     })

     //
      

     
    });

    
  
  }

  
  creardeuda(){
    this.router.navigate(['tabs/crear-deuda']);
  }


  ver_cuota(id){
    this.router.navigate(['tabs/cuotas', id]);
  }

}
