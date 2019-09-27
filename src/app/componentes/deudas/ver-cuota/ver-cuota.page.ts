import { DeudaService } from './../../../servicios/deuda.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CuotasService } from './../../../servicios/cuotas.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-ver-cuota',
  templateUrl: './ver-cuota.page.html',
  styleUrls: ['./ver-cuota.page.scss'],
})
export class VerCuotaPage implements OnInit {

  public cuota: any = [];
  public id: number;
  constructor( private deudaservice:DeudaService ,private cuotaservice: CuotasService , private ar: ActivatedRoute , private router:Router) { }

  ngOnInit() {
    this.getCuotas();
  }

  getCuotas() {
    this.ar.params.subscribe(x => {
      this.id = x.id;
      console.log(this.id);
      this.cuotaservice.getCuotas(this.id).subscribe(y => {
        console.log(y);
        this.cuota = y.datos;
      });
    });
  }


 ver_cuota(cuotaid){
  this.cuotaservice.deleteCuota(cuotaid).subscribe(()=>{
  this.getCuotas()
  this.deudaservice.deleteupload.emit(this.cuota);
          
          
  })
 }

}
