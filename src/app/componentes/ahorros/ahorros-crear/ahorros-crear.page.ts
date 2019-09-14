import { AhorrosService } from './../../../servicios/ahorros.service';
import { ActivatedRoute,Router } from '@angular/router';
import { cingresos } from './../../../modelos/CIngresos';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastController } from '@ionic/angular';




@Component({
  selector: 'app-ahorros-crear',
  templateUrl: './ahorros-crear.page.html',
  styleUrls: ['./ahorros-crear.page.scss'],
})
export class AhorrosCrearPage implements OnInit {

  public ingresos:cingresos=new cingresos;
  constructor( private datePipe:DatePipe,private ar:ActivatedRoute,private ahorroservice:AhorrosService,private router:Router,public toastController: ToastController) { }

  ngOnInit() {
    this.ar.params.subscribe(x=>{
      this.ahorroservice.getcuentabanco(1,x.id).subscribe(y=>{
        y.datos.map(z=>{
          this.ingresos.cuentas_id=z.id
          console.log(this.ingresos.cuentas_id)
        })
      })
    })
  }

  guardar(){
    console.log(this.ingresos);
   
    this.ingresos.fecha=this.datePipe.transform(this.ingresos.fecha,"yyyy-MM-dd")
    this.ahorroservice.crearCingreso(this.ingresos).subscribe(()=>{
      
      this.ahorroservice.getcuentaid(this.ingresos.cuentas_id).subscribe(y=>{
        y.map(z=>{
          this.router.navigate(['tabs/ahorrosingresos',z.banco_id])
          this.presentToast()
          this.ahorroservice.notificarupload.emit(this.ingresos);
          this.ingresos.cantidad=null;
          this.ingresos.nombre_ingreso="";
          this.ingresos.id=null;
          this.ingresos.fecha="";
          this.ingresos.cuentas_id=null
        })
        
      })
     
      
     
    })

  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se agrego el gasto',
       duration:1000
    });
    toast.present();
  }

}
