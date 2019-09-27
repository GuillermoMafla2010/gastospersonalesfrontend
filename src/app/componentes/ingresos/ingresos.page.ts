import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.page.html',
  styleUrls: ['./ingresos.page.scss'],
})
export class IngresosPage implements OnInit {

  constructor(private router:Router,private statusBar: StatusBar) {
    this.statusBar.backgroundColorByHexString('#fafaf7');
   }

  ngOnInit() {
  }

  verIngresos(){
    this.router.navigate(['tabs/ver-ingresos'])
  }

  crearIngresos(){
    this.router.navigate(['tabs/crear-ingresos'])
  }

  verIngresosPorFecha(){
    this.router.navigate(['tabs/ver-ingresos-fecha'])
  }

}
