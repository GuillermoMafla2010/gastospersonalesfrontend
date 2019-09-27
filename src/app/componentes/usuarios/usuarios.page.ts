import { Gastos } from './../../modelos/Gastos';
import { GastosService } from './../../servicios/gastos.service';
import { IngresosService } from './../../servicios/ingresos.service';
import { UsuariosService } from './../../servicios/usuarios.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  public usuarios
  
  public sumagastos=0.0
  public sumaingresos=0.0
  constructor(private usuarioservice:UsuariosService,
              private gastoservice:GastosService,
              private ingresoservice:IngresosService
              ,private statusBar:StatusBar) {
                this.statusBar.backgroundColorByHexString('#fafaf7');
                
               }

  ngOnInit() {
    this.getUsuarios();
    
    this.gastoservice.notificarPost.subscribe(()=>{
        this.getUsuarios()
    })

    this.gastoservice.notificarUpdate.subscribe(()=>{
      this.getUsuarios()
    })

    this.gastoservice.notificarDelete.subscribe((pos)=>{
      console.log(pos)
      this.getUsuarios()
    })

    this.ingresoservice.notificarPost.subscribe(()=>{
      this.getUsuarios()
    })

    this.ingresoservice.notificarUpdate.subscribe(()=>{
      this.getUsuarios()
    })
    
    this.ingresoservice.notificarDelete.subscribe((pos)=>{
      this.getUsuarios()
      console.log(pos)
    })

    
  }

 getUsuarios(){
    this.usuarioservice.getUsuariosPorId(1).subscribe(x=>{
      console.log(x)
     x.usuario.map(y=>{
       this.usuarios=y
       
     })
      this.sumaingresos=x.totalingreso
      this.sumagastos=x.totalgasto
    console.log(this.usuarios)

     
    })

    

}


    

}
