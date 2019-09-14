import { Component, OnInit } from '@angular/core';
import { Deuda } from 'src/app/modelos/Deuda';
import { DatePipe } from '@angular/common';
import { DeudaService } from 'src/app/servicios/deuda.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-crear-deuda',
  templateUrl: './crear-deuda.page.html',
  styleUrls: ['./crear-deuda.page.scss'],
})
export class CrearDeudaPage implements OnInit {

  public deuda:Deuda=new Deuda
  constructor(private deudaservice:DeudaService,private router:Router,private datePipe:DatePipe) { }

  ngOnInit() {
  }

  guardar(){
    this.deuda.usuario_id=1
    this.deuda.pagado=0;
    this.deuda.fecha=this.datePipe.transform(this.deuda.fecha,"yyyy-MM-dd")
    this.deudaservice.postDeudas(this.deuda).subscribe(x=>{
      console.log("Deuda creada")
      this.router.navigate(['tabs/deudas'])
      this.deudaservice.notificarupload.emit(this.deuda)
    })
  }

}
