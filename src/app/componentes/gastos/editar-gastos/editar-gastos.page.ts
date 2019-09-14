import { CategoriagastoService } from './../../../servicios/categoriagasto.service';
import { Gastos } from './../../../modelos/Gastos';
import { GastosService } from './../../../servicios/gastos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CategoriaingresoService} from 'src/app/servicios/categoriaingreso.service';
import { formatDate, DatePipe } from '@angular/common';
import swal from 'sweetalert2'
@Component({
  selector: 'app-editar-gastos',
  templateUrl: './editar-gastos.page.html',
  styleUrls: ['./editar-gastos.page.scss'],
})
export class EditarGastosPage implements OnInit {

  public categorias=[]
  public gasto:Gastos
  constructor(private activatedroute:ActivatedRoute,
    private gastoservice:GastosService,
    private categoriaservice:CategoriagastoService,
    private router:Router,
    private datePipe: DatePipe) { }

   ngOnInit() {

    this.getcategorias()
    this.activatedroute.params.subscribe(x=>{
      console.log(x.id)
      this.gastoservice.getGastoIndividual(x.id).subscribe(x=>{
          x.map(y=>this.gasto=y)
          console.log(this.gasto)
      })
    })
  }


  getcategorias(){
    this.categoriaservice.getcategorias().subscribe(x=>{
      this.categorias=x
      console.log(this.categorias)
    })

  }

  compararCategoria(o1:any,o2:any){
    return o1==null || o2 ==null ? false:o1.id===o2.id
  }

  guardar(){
    this.gasto.categoria_id=this.gasto.categorias.id
    this.gasto.user_id=1;
    this.gasto.fecha=this.datePipe.transform(this.gasto.fecha,"yyyy-MM-dd")
   
    console.log(this.gasto)
    this.gastoservice.updateGasto(this.gasto,this.gasto.id).subscribe(x=>{
      console.log("Gasto Actualizado")
      this.router.navigate(['tabs/ver-gastos']) 
      this.gastoservice.notificarUpdate.emit(this.gasto)
      //swal.fire("Exito","Gasto guardado","success");
    })
    
  }



}
