import { CuotasService } from './../../../servicios/cuotas.service';
import { Cuotas } from './../../../modelos/Cuotas';
import { Component, OnInit } from '@angular/core';
import { Deuda } from 'src/app/modelos/Deuda';
import { DatePipe } from '@angular/common';
import { DeudaService } from 'src/app/servicios/deuda.service';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';





@Component({
  selector: 'app-crear-deuda',
  templateUrl: './crear-deuda.page.html',
  styleUrls: ['./crear-deuda.page.scss'],
})
export class CrearDeudaPage implements OnInit {

  public deuda:Deuda=new Deuda
  public cuotas:Cuotas = new Cuotas;
  constructor(private deudaservice:DeudaService,private router:Router,private statusBar: StatusBar , private cuotaservice:CuotasService) {

    this.statusBar.backgroundColorByHexString('#fafaf7');      
     }

  ngOnInit() {
  }

  guardar(){
    this.deuda.usuario_id=1
    this.deudaservice.postDeudas(this.deuda).subscribe(x=>{

      for (let i = 0 ; i < this.deuda.cuota ; i++) {
          console.log(i);
          this.cuotas.deuda_id = x.deuda.id;
          this.cuotas.cantidad_cuota = (this.deuda.cantidad / this.deuda.cuota);
          this.cuotas.nombre_cuota = `${this.deuda.nombre_deuda} Cuota ${i+1}`;
          this.cuotaservice.postCuotas(this.cuotas).subscribe(() => {
            console.log(this.cuotas);
          });
          console.log(this.cuotas);
      }
      console.log("Deuda creada")
      this.router.navigate(['tabs/deudas'])
      this.deudaservice.notificarupload.emit(this.deuda)
    })
  }

}
