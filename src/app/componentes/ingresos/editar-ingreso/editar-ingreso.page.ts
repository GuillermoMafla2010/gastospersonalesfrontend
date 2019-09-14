import { DatePipe } from '@angular/common';
import { CategoriaingresoService } from './../../../servicios/categoriaingreso.service';
import { Categoria } from './../../../modelos/Categoria';
import { Ingresos } from './../../../modelos/Ingresos';
import { ActivatedRoute, Router } from '@angular/router';
import { IngresosService } from './../../../servicios/ingresos.service';
import { Component, OnInit,Input } from '@angular/core';
import {CategoriagastoService} from 'src/app/servicios/categoriagasto.service';




@Component({
  selector: 'app-editar-ingreso',
  templateUrl: './editar-ingreso.page.html',
  styleUrls: ['./editar-ingreso.page.scss'],
})
export class EditarIngresoPage implements OnInit {

  public ingreso:Ingresos=new Ingresos()
  public categorias:Categoria
  constructor(private ingresoservice:IngresosService,
              private activatedroute:ActivatedRoute,
              private categoria:CategoriaingresoService,
              private datePipe:DatePipe,
              private router:Router ) { }

  ngOnInit() {
    this.activatedroute.params.subscribe(x=>{
      this.ingresoservice.getIngresoPorId(x.id).subscribe(x=>{
        x.map(y=>{
          this.ingreso=y
          console.log(this.ingreso)
        })
      })
    })

    this.getCategorias()
  }


  getCategorias(){
    this.categoria.getcategorias().subscribe(x=>{
      this.categorias=x
    })
  }

  compararCategoria(o1:any,o2:any){
    return o1==null || o2 ==null ? false:o1.id===o2.id
  }

  guardar(){
    this.ingreso.categoria_id=this.ingreso.categorias.id
    this.ingreso.user_id=1;
    this.ingreso.fecha=this.datePipe.transform(this.ingreso.fecha,"yyyy-MM-dd")
    console.log(this.ingreso)
    this.ingresoservice.updateIngreso(this.ingreso).subscribe(x=>{
      console.log("Actualizado")
        this.router.navigate(['tabs/ver-ingresos'])
        this.ingresoservice.notificarUpdate.emit(this.ingreso)

    })
  }



}
