import { cingresos } from './../../../modelos/CIngresos';
import { Router } from '@angular/router';
import { AhorrosService } from './../../../servicios/ahorros.service';
import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';




@Component({
  selector: 'app-ahorros',
  templateUrl: './ahorros.page.html',
  styleUrls: ['./ahorros.page.scss'],
})
export class AhorrosPage implements OnInit {

 
   bancos=[]
   ingresos=[]
   gastos=[]
   info=[]
  constructor(private ahorroservice:AhorrosService,private router:Router,private statusBar: StatusBar
    ) {
      this.statusBar.backgroundColorByHexString('#fafaf7');
      
     }
  ngOnInit() {
    this.getAhorros()
   
   
  }

  getAhorros(){
    this.ahorroservice.notificarupload.subscribe(()=>{
      if(this.bancos.length>1){
        this.bancos=[]
        this.getAhorros()
      }})

      this.ahorroservice.notificargastoupload.subscribe(()=>{
        if(this.bancos.length>1){
          this.bancos=[]
          this.getAhorros()
        }})

      this.ahorroservice.notificardelete.subscribe(()=>{
        if(this.bancos.length>1){
          this.bancos=[]
          this.getAhorros()
        }
      
    })

    this.ahorroservice.notificargastodelete.subscribe(()=>{
      if(this.bancos.length>1){
        this.bancos=[]
        this.getAhorros()
      }
    
  })


    

     
    this.ahorroservice.getCuentasPorId(1).subscribe(x=>{
      
      
     
      
       
      x.map( y=>{
         this.ahorroservice.getcuentabanco(y.user_id,y.banco_id).subscribe(async z=>{
         await this.bancos.push(z)
         await console.log(this.bancos)
        })
      })
      
       
     
})



  }  // Fin del metodo getAhorros



  veropciones(id:number){
    console.log(id)
    this.router.navigate(['tabs/opcionesahorros',id]);
  }



}//Fin de la clase